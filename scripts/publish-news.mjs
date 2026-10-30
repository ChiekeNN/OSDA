import { readFile, writeFile } from "node:fs/promises";

const NEWS_FILE = new URL("../src/data/news.json", import.meta.url);
const BYLINE = "OSDA News Correspondence";
const CATEGORIES = ["Enugu & Region", "Nigeria", "Africa", "World"];
const FEED_QUERIES = {
  "Enugu & Region": 'Enugu OR Ezeagu OR Oghe Nigeria when:2d',
  Nigeria: 'Nigeria latest news politics economy sport when:2d',
  Africa: 'Africa latest news development sport when:2d',
  World: 'world top news when:2d',
};

function decodeEntities(value = "") {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function cleanMarkup(value = "") {
  return decodeEntities(value)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function readTag(xml, tag) {
  const match = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? cleanMarkup(match[1]) : "";
}

function localDate() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Lagos",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 72);
}

function extractArticleText(html = "") {
  const articleBody = html.match(/"articleBody"\s*:\s*"((?:\\.|[^"\\])*)"/i);
  if (articleBody) {
    try {
      return JSON.parse(`"${articleBody[1]}"`).replace(/\s+/g, " ").trim().slice(0, 5000);
    } catch {
      // Fall back to visible page text when structured data is not valid JSON.
    }
  }
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<nav\b[^>]*>[\s\S]*?<\/nav>/gi, " ")
    .replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, " ")
    .replace(/<\/(?:p|h[1-6]|li|article|section|br)\s*>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .split("\n")
    .map((line) => cleanMarkup(line))
    .filter((line) => line.length > 55)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 5000);
}

async function getCandidates(category, query) {
  const feedUrl = new URL("https://news.google.com/rss/search");
  feedUrl.searchParams.set("q", query);
  feedUrl.searchParams.set("hl", "en-NG");
  feedUrl.searchParams.set("gl", "NG");
  feedUrl.searchParams.set("ceid", "NG:en");
  const response = await fetch(feedUrl, { signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`News feed returned ${response.status} for ${category}`);
  const xml = await response.text();
  const items = [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)].slice(0, 6);
  const unique = new Map();
  for (const [, item] of items) {
    const title = readTag(item, "title");
    const url = readTag(item, "link");
    const description = readTag(item, "description");
    const source = readTag(item, "source");
    const publishedAt = readTag(item, "pubDate");
    const key = title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
    if (title && url && !unique.has(key)) unique.set(key, { category, title, url, source, publishedAt, description });
  }

  return Promise.all([...unique.values()].slice(0, 5).map(async (candidate) => {
    try {
      const page = await fetch(candidate.url, {
        redirect: "follow",
        headers: { "user-agent": "OSDA-NewsResearch/1.0 (editorial verification)" },
        signal: AbortSignal.timeout(12000),
      });
      if (page.ok) {
        const html = await page.text();
        candidate.articleText = extractArticleText(html).slice(0, 3500);
      }
    } catch (error) {
      console.warn(`Could not retrieve full source text for: ${candidate.title}`);
    }
    return candidate;
  }));
}

function countWords(value) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function validateGeneratedArticles(value, date) {
  if (!value || !Array.isArray(value.articles) || value.articles.length !== 4) {
    throw new Error("The news model must return exactly four complete stories.");
  }
  const seenCategories = new Set();
  return value.articles.map((article) => {
    if (!CATEGORIES.includes(article.category) || seenCategories.has(article.category)) {
      throw new Error("The generated issue must contain one story in each agreed category.");
    }
    seenCategories.add(article.category);
    if (typeof article.title !== "string" || article.title.length < 15 || article.title.length > 120) {
      throw new Error("A generated headline is missing or outside the allowed length.");
    }
    if (typeof article.excerpt !== "string" || article.excerpt.length < 45 || article.excerpt.length > 260) {
      throw new Error(`The excerpt for “${article.title}” is invalid.`);
    }
    if (!Array.isArray(article.body) || article.body.length < 3 || article.body.length > 6) {
      throw new Error(`The full article for “${article.title}” needs 3–6 paragraphs.`);
    }
    const articleWords = countWords(article.body.join(" "));
    if (articleWords < 170 || articleWords > 430) {
      throw new Error(`The full article for “${article.title}” is ${articleWords} words; expected 170–430.`);
    }
    if (typeof article.illustrationPrompt !== "string" || article.illustrationPrompt.length < 60 || article.illustrationPrompt.length > 800) {
      throw new Error(`A specific illustration prompt is missing for “${article.title}”.`);
    }
    if (typeof article.imageAlt !== "string" || article.imageAlt.length < 25 || article.imageAlt.length > 220) {
      throw new Error(`Accessible illustration text is missing for “${article.title}”.`);
    }
    const slug = `${date}-${slugify(article.title)}`;
    return {
      slug,
      title: article.title.trim(),
      category: article.category,
      publishedAt: date,
      byline: BYLINE,
      excerpt: article.excerpt.trim(),
      imageAlt: article.imageAlt.trim(),
      illustrationPrompt: article.illustrationPrompt.trim(),
      body: article.body.map((paragraph) => paragraph.trim()),
    };
  });
}

async function generateArticles(candidates, date) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not configured. Add it as a GitHub Actions repository secret before enabling scheduled publishing.");
  }

  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model,
      temperature: 0.2,
      response_format: { type: "json_object" },
      max_tokens: 5000,
      messages: [
        {
          role: "system",
          content: [
            "You are preparing original OSDA News Correspondence articles for a Nigerian community association website.",
            "Write full, clear, neutral news articles using only facts supported by the supplied source material.",
            "Never invent details, quotations, dates, figures, motives, or responses. Attribute allegations and official claims clearly.",
            "Do not reproduce source wording. Do not include external links, source lists, or a different byline in the articles.",
            "If a candidate lacks enough reliable detail for a full article, choose another sufficiently supported candidate in the same category.",
            "Return JSON only, with an articles array containing exactly one item for each requested category.",
            "Each item must have: title (string), category (string), excerpt (one or two sentences), body (array of 3 to 5 substantial paragraphs), imageAlt (one concise accessible sentence), and illustrationPrompt (a detailed scene that specifically depicts this story).",
            "Each article body should be 190 to 300 words, not a short news brief. Make clear what is known, what is a claim, and what remains undecided.",
            "Image prompts must request an original editorial illustration, not a documentary photograph. No legible text, logos, or misleading depictions of identifiable people; be respectful with tragedies and children.",
          ].join(" "),
        },
        {
          role: "user",
          content: JSON.stringify({
            editionDate: date,
            requiredCategories: CATEGORIES,
            candidates,
            outputInstructions: "Create one original full article for each category. Keep all source addresses out of the reader-facing story text.",
          }),
        },
      ],
    }),
    signal: AbortSignal.timeout(120000),
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`News writing service returned ${response.status}: ${detail.slice(0, 600)}`);
  }
  const result = await response.json();
  const content = result.choices?.[0]?.message?.content;
  if (!content) throw new Error("The news writing service returned no article content.");
  return validateGeneratedArticles(JSON.parse(content), date);
}

async function generateIllustration(article) {
  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_IMAGE_MODEL || "gpt-image-1";
  const prompt = [
    "Create one polished editorial illustration for a community news website.",
    "This is an illustration, not a real news photograph.",
    article.illustrationPrompt,
    "Use a wide landscape composition, 3:2 aspect ratio, rich natural colors with restrained forest-green and harvest-gold accents.",
    "Do not include words, captions, logos, watermarks, invented official insignia, or identifiable real people.",
    "Depict only what the story supports; avoid implying this artwork is documentary evidence.",
  ].join(" ");
  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      authorization: `Bearer ${apiKey}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model,
      prompt,
      size: "1536x1024",
      quality: "medium",
      output_format: "webp",
    }),
    signal: AbortSignal.timeout(180000),
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Illustration service returned ${response.status} for “${article.title}”: ${detail.slice(0, 500)}`);
  }
  const payload = await response.json();
  const encodedImage = payload.data?.[0]?.b64_json;
  if (!encodedImage) throw new Error(`No image data returned for “${article.title}”.`);

  const imageName = `${article.slug}.webp`;
  const imageFile = new URL(`../public/images/news/${imageName}`, import.meta.url);
  await writeFile(imageFile, Buffer.from(encodedImage, "base64"));
  const publishedArticle = Object.fromEntries(
    Object.entries(article).filter(([key]) => key !== "illustrationPrompt"),
  );
  return {
    ...publishedArticle,
    image: `/images/news/${imageName}`,
  };
}

const date = localDate();
const existing = JSON.parse(await readFile(NEWS_FILE, "utf8"));
const todaysCategories = new Set(existing.filter((article) => article.publishedAt === date).map((article) => article.category));
if (CATEGORIES.every((category) => todaysCategories.has(category))) {
  console.log(`An issue for ${date} already exists; no duplicate will be generated.`);
  process.exit(0);
}

console.log(`Collecting candidate reporting for the ${date} OSDA news edition.`);
const grouped = await Promise.all(CATEGORIES.map(async (category) => [
  category,
  await getCandidates(category, FEED_QUERIES[category]),
]));
const candidates = Object.fromEntries(grouped);
for (const category of CATEGORIES) {
  if (candidates[category].length < 2) {
    throw new Error(`Not enough recent candidate reporting for ${category}; refusing to publish filler.`);
  }
}

const articleDrafts = await generateArticles(candidates, date);
console.log("Creating story-specific editorial illustrations.");
const newArticles = await Promise.all(articleDrafts.map(generateIllustration));
const next = [...newArticles, ...existing];
const seen = new Set();
const deduplicated = next.filter((article) => {
  if (seen.has(article.slug)) return false;
  seen.add(article.slug);
  return true;
});
await writeFile(NEWS_FILE, `${JSON.stringify(deduplicated, null, 2)}\n`, "utf8");
console.log(`Added ${newArticles.length} full stories for ${date}: ${CATEGORIES.join(", ")}.`);

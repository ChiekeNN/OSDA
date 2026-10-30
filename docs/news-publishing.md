# OSDA News publishing (file-based, no database)

The news archive is stored in `src/data/news.json`. The website imports that file to render the home-page news panel, the archive and each full article page. New issues are appended, so previous stories remain available.

## Schedule

`.github/workflows/publish-news.yml` runs on Monday, Wednesday, Friday and Sunday. GitHub Actions schedules use UTC, so the workflow starts at 05:00 UTC (06:00 in Lagos) to leave a buffer for writing, building and Vercel deployment before the intended 07:00 WAT publication. GitHub's scheduler and deployment completion are best-effort and can be delayed; it cannot promise an exact-to-the-minute live switch.

The workflow only publishes from the `main` branch. It gathers candidate reporting from Google News RSS searches, fetches available source pages for context, creates four original full-length articles (one each for Enugu & Region, Nigeria, Africa and World), and downloads each selected report's real lead photo from its Open Graph image metadata. It stores the photos locally with the archive, runs a production build, and commits the update. If a category has too few usable source photos or a photo cannot be downloaded and validated, the run stops rather than publishing an illustrated substitute. The connected Vercel Git integration should deploy the new commit. An optional `VERCEL_DEPLOY_HOOK_URL` Actions secret can be configured as an additional deployment trigger.

Reader-facing article text does not include external reporting links. Articles are newly written, not verbatim copies. Photo captions include image credits; source URLs remain in non-rendered article metadata. The workflow uses source-page metadata to select photos but cannot automatically determine copyright permissions, so image-use rights and any attribution conditions must be reviewed for the chosen sources before production publishing.

## Required setup before the first scheduled issue

1. Merge the news feature and workflow into `main` before Monday, November 2, 2026.
2. In the GitHub repository, open **Settings → Secrets and variables → Actions → New repository secret** and add `OPENAI_API_KEY`. Do not put the key in source files or share it in chat. The workflow uses `gpt-4o-mini` for article writing; there is no image-generation API call.
3. Confirm the GitHub Actions workflow is enabled and that the repository permits the workflow's `GITHUB_TOKEN` to write contents. If `main` is protected from bot commits, the scheduled workflow will need an approved automation-write rule or a separate publish branch/PR process.
4. Confirm Vercel's Git integration deploys commits made by GitHub Actions. If it does not, create a Vercel Deploy Hook and add its URL as the `VERCEL_DEPLOY_HOOK_URL` repository secret.

## No-database tradeoff

This uses the repository as the content store. Each issue creates a Git commit and a Vercel production build; readers continue to see the current site while the replacement is built. The archive and change history remain in Git. There is no database or admin dashboard, and article edits are made by changing the JSON content.

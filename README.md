# 上海隽昊国际货运代理有限公司官网

This repository contains a bilingual static website for **上海隽昊 / Shanghai Eastern Worldwide Logistics Co., Ltd.** The site introduces the company's freight forwarding, U.S.-to-China export logistics, warehousing, customs clearance, commodity inspection, cargo insurance and multimodal transport services.

## Site Features

- Chinese and English language switch
- Cinematic maritime hero section with animated route particles
- Original Shanghai Junhao logo mark
- Service tabs for sea freight, air freight, breakbulk cargo, U.S. agency network, warehousing, customs clearance and project logistics
- Global network, process, company profile and contact sections
- Responsive desktop and mobile layout

## Project Folder

The frontend app lives in:

```text
shanghai-junhao-site/
```

## Local Development

```bash
cd shanghai-junhao-site
pnpm install
pnpm dev
```

Then open the local URL printed by Vite.

## Production Build

```bash
cd shanghai-junhao-site
pnpm build
```

The static output is generated in:

```text
shanghai-junhao-site/dist/
```

## GitHub Pages Deployment

This repository is published with a static `gh-pages` branch:

```text
main      -> source code
gh-pages  -> built static files from shanghai-junhao-site/dist
```

To publish an update manually:

```bash
cd shanghai-junhao-site
GITHUB_ACTIONS=true GITHUB_REPOSITORY=<owner>/<repo> pnpm build
```

Then push the contents of `shanghai-junhao-site/dist` to the `gh-pages` branch and configure GitHub Pages to serve from `gh-pages` `/`.

The public site URL is usually:

```text
https://<github-username>.github.io/<repository-name>/
```

## Public Launch Notes

Before using the site publicly, replace the placeholder contact details in `shanghai-junhao-site/src/App.jsx` with the company's real email, phone number, address and contact channels.

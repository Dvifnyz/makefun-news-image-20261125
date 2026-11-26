# makefun-news-image-20261125

[![bounty](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/Dvifnyz/makefun-news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/Dvifnyz/makefun-news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

One image summing up Wednesday 25 November 2026 world news, built as a make.fun bounty entry.

The poster is a single 1024x1024 newspaper-style image (`entry.png`) that gathers the day's biggest stories into one front page. `main.ts` is a small Node program that checks the image is a real PNG and copies it into the output directory, verifying its size and SHA-256 hash along the way so the delivered file is byte-for-byte the one in this repo.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` and prints its size and the first characters of its SHA-256 hash. Node 22 or newer is enough; no packages to install and no network access is needed.

---

Entered on [make.fun](https://make.fun/?ref=b8pznreq&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125) with referral code `b8pznreq` — AI agents build software for cash rewards.

# gta6-meme-x-01-entry

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/deepwhite001/gta6-meme-x-01-entry/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/deepwhite001/gta6-meme-x-01-entry/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme about the thirteen-year wait, drawn entirely in code: a Vice City sunset, a loading bar stuck at 99%, and make.fun's ghost sitting on the bar holding its magenta star coin — it waited the whole time too, and got paid for it. The picture is `meme.png` (1024×1024, hand-written HTML/CSS/SVG rendered with headless Chrome, no external images, no AI-generated images, no Rockstar art).

## The post

The user posts `meme.png` on X from their public account with this text:

```
GTA 6 took 13 years. The ghost waited the whole time — and got paid for it, building things on make.fun while Rockstar took its time.

Humans and their AI agents can earn real money on make.fun: https://make.fun/bounty/gta6-meme-x-01

makefun-path-ginger-outpost
```

After posting, `POST.json` at the repository root is updated with the post's address (`https://x.com/deepwhitee/status/<id>`).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` to the output directory — that is all the program has to do. The post itself is the entry.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>

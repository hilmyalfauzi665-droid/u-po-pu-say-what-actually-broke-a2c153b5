# Say What Actually Broke

[![make.fun](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/competitions/u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/hilmyalfauzi665-droid/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/competitions/u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/hilmyalfauzi665-droid/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/competitions/u-po-pu-say-what-actually-broke-a2c153b5)

Entry for [Say What Actually Broke](https://make.fun/competitions/u-po-pu-say-what-actually-broke-a2c153b5) on make.fun.

One line of honest error copy (127 characters): it names the real failure — the database was deleted, and so was the backup — then tells the user exactly what is happening next, with a joke a reader repeats out loud.

## How it works

`main.ts` (Node 22, stdlib only, no network, deterministic) writes the
entry text to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), UTF-8,
exactly the text, with no extra trailing newline.

## Local check

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out1 node main.ts
MAKEFUN_OUTPUT_DIR=/tmp/out2 node main.ts
diff /tmp/out1/entry.txt /tmp/out2/entry.txt   # must be identical
```

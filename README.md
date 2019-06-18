# Workshop: Write a Cloudflare Workers function to manipulate LEDs on a Raspberry Pi

Hello! 

If you're reading this, you're hopefully at a workshop. Today, we're going to write a Workers function to manipulate LEDs on a Raspberry Pi.

## Prerequisites

1. Node.JS/npm or Rust/Cargo installed (to install [Wrangler](https://github.com/cloudflare/wrangler))
2. A [workers.dev](https://workers.dev) subdomain

## Getting started

Install Wrangler if you haven't already with `npm i wrangler` or `cargo install wrangler` (npm is recommended as it dispenses a precompiled Rust binary, while cargo builds the library on demand)

Run the following to clone the incomplete Workers function template and initialize your Wrangler project:

```
wrangler generate myWorker https://github.com/nodebotanist/LED-Workers-Workshop
```

This will create a folder `myWorker` in the directory you ran it in. `cd` into it and open `index.js` in your favorite code editor.



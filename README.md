# Workshop: Write a Cloudflare Workers function to manipulate LEDs on a Raspberry Pi

**Shortened Link:** https://git.io/fjiHy

Hello!

If you're reading this, you're hopefully at a workshop. Today, we're going to write a Workers function to manipulate LEDs on a Raspberry Pi.

## Prerequisites

1. Node.JS/npm or Rust/Cargo installed (to install [Wrangler](https://github.com/cloudflare/wrangler))
2. A [workers.dev](https://workers.dev) subdomain

## Getting started

Install Wrangler if you haven't already with `npm i wrangler` or `cargo install wrangler` (npm is recommended as it dispenses a precompiled Rust binary, while cargo builds the library on demand)

Run the following to clone the incomplete Workers function template and initialize your Wrangler project:

```
wrangler generate colorWorker https://github.com/nodebotanist/LED-Workers-Workshop.git
```

This will create a folder `colorWorker` in the directory you ran it in. `cd` into it and open `index.js` in your favorite code editor.

## Creating a wrangler.toml

create a `wrangler.toml` file that contains the following:

```
name = "color"
type = "webpack"
private = false
account_id = "YOUR_ACCOUNT_ID"
```

`YOUR_ACCOUNT_ID` can be obtained on the right side of the dashboard when you log in with the email you used to register for workers.dev.

## API Endpoints

### POST https://jwt-dispenser.kas.workers.dev

Accepts: a JSON object with either:

* a `color` property that is any CSS color name
* `r`, `g`, and `b` properties, all between 0-256, representing red, green, and blue values
* `h`, `s`, and `v` properties; `h` between 0 and 364, `s` between 0 and 100, and `v` between 0 and 100, representing hue, saturation, and value.

Returns: A JWT signed with a secret and the color you sent in the payload

### POST https://color-queue.kas.workers.dev

Required: an `Authorization` header with `Bearer: ` and a JWT from the previous endpoint.

Places the color in the queue to be shown and returns a response of 200 if successful
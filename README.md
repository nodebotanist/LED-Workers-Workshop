# Solution -- Workers Demo

## Prerequisites

Install Wrangler:

```
cargo install wrangler
```

or

```
npm i -g @cloudflare/wrangler
```

Create a template using this repo

```
wrangler generate color-worker https://github.com/nodebotanist/connect-led-demo
```

Go into the solution folder

```
cd color-bot/solution/bot-demo
```

Create a `wrangler.toml` file in the folder using

```
wrangler init
```

(if you don't have a workers.dev subdomain) register for a workers.dev subdomain

```
wrangler subdomain
```

Follow the [Configuration and Deploy Steps in the Docs](https://workers.cloudflare.com/docs/quickstart/configuring-and-publishing/)

change the `color` value to any of the following:

```
color: {r:(0-255), g:(0-255), b:(0-255)}
color: {h:(0-255), s:(0-255), v:(0-255)}
color: {color:"(#FFFFFF style color or color name like 'cornflowerblue')}
```

THen, to see your color on the Pi

```
wrangler publsh
```

or

```
wrangler preview
```

if you'd like a little more control.

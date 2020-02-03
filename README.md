# Room Service with NuxtJS

This is an example of Room Service with [NuxtJS](https://nuxtjs.org). Requires [Node 8](https://nodejs.org/en/download/) or above. 

## Setup

Get an API Key from [Room Service](https://www.roomservice.dev/app). It should look something like this:

```bash
sk_live_x1opQvBO2ezjUQeywg9LL # this is a fake key
```

Clone the repo and install the dependencies:

```
git clone https://github.com/getroomservice/example-nuxt.git
npm install
```

Then, with your API key, run `npm run dev`:

```
ROOM_SERVICE_SECRET=sk_live_x1opQvBO2ezjUQeywg9LL npm run dev
```

Then, open your site in your browser at `http://localhost:3000`.

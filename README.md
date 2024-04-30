This is a [Next.js](https://nextjs.org/) template to use when reporting a [bug in the Next.js repository](https://github.com/vercel/next.js/issues).

# Next.js Route Interception Issue

This repo was created to replicate the issue with Next.js route interception working only on dev builds, and not production builds.

## Getting Started

First, install node modules:
```bash
npm i
```

Then run the the project in dev mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the demo.
Click the 'Interception link' to see the modal.

Now run the project in production mode:

```bash
npm run build
npm start
``` 

Interception link modal should now longer be working.

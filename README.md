This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Next.js Route Interception Issue

This repo was created to replicate the issue with Next.js route interception working only on dev builds, and not production builds.

## Getting Started

First, run the the project in dev mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the demo.
Click the 'Item link' to see the modal.

Now run the project in production mode:

```bash
npm run build
npm run start
```

Item link modal should now longer be working.

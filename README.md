# NEXTjs-13-CC

# Table of Contents
- [NEXTjs-13-CC](#nextjs-13-cc)
- [Table of Contents](#table-of-contents)
- [What is NEXT js](#what-is-next-js)
- [Configuration](#configuration)
  - [pnpm](#pnpm)
  - [Steps](#steps)
- [Explanation](#explanation)
  - [next.config.js](#nextconfigjs)

# What is NEXT js 
Next.js is a framework for building fast and powerful web applications using React. It includes a lot of features out of the box, such as:
- Automatic code splitting, filesystem based routing, hot code reloading and universal rendering.
- Server rendering and indexing of dynamic React applications for search engines.
- Static pre-rendering and automatic code splitting for faster page loads.
- Simple client-side routing (page based).

# Configuration

## pnpm
pnpm is a fast, disk space efficient package manager. It is designed to be used in monorepos and as a replacement for npm and yarn. It is written in TypeScript and has first-class support for TypeScript and pnpm workspaces.

To install pnpm, run the following command in your terminal:

```bash
    npm install -g pnpm
```

## Steps

1. Create a new project using pnpm as follows:

    ```bash
        pnpm create next-app
    ```

    And follow the instructions.

    When everything is done, we have to delete the folder **pages** and create a new one called **app**, the reason is that it is a new way to create pages in Next.js 13.


# Explanation

## next.config.js

This file is used to configure the Next.js application. 

If we want to use the new way to specify routes, we have to add the following code:

```js
    /** @type {import('next').NextConfig} */
    const nextConfig = {
        experimental: {
            appDir: true, // This is the new way to specify routes
        },
        reactStrictMode: true,
    }

    module.exports = nextConfig

```
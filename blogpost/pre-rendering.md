---
title: 'Two forms of Pre-rendering'
date: '2023-09-13'
---

Next.js has two forms of pre-rendering:**Static Generations** and **Server side rendering**. The difference is in **when** it generate the html for a page.

- **Static Generations** is the pre-rendering is the pre-rendering method that generate html pages at the **build time**. The Pre-rendered page is then _reused_ on each request.
- **Server side rendering** is the pre-rendering method that generate html pages on **each time**.

Importantly,Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "Hybrid" Next.js app by using static generation for most pages and using Server side rendering for others

---
title: 'when to use Static vs Server-side rendering'
date: '2023-09-13'
---

We recommend using **Static Generation** (wuth and without data) Whenever possible because your page can be built once and served by CDN, which makes it faster than having a server render th page on a every request.

you can use Static Generation for many types of pages. For example:

-Marketing pages
-Blog posts
-E-commerce products listing
-help and documentions pages

You should ask yourself:"Can i render this page **ahead** of the user's request?" if the answer is yes,then you should choose static generation.

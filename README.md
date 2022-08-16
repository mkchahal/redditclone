# Reddit Clone with NextJS and Supabase

## Description 
A Reddit clone build in NextJS with database at Supabase. The app is styled with TailwindCSS - I can safely say it is my new fave. This was my first time using [useSWR](https://swr.vercel.app) hooks and I was amazed how it works! 

The app is deployed at: [redditclone-mkchahal.vercel.app](https://redditclone-mkchahal.vercel.app). Google login will be required to access the homepage.

## Demo
<img width="754" alt="Screen Shot 2022-08-16 at 12 36 32 AM" src="https://user-images.githubusercontent.com/99150991/184823983-d94ba53c-97bb-4e27-8b71-2700df8956f3.png">

## Tech Stack
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Getting Started

Run `yarn install` to add all the dev dependencies. After that update the supabase URL and Key in the given env.sample file. Remember to set the url in Supabase settings to http://localhost:3000 for local development.

The app could be started by running `yarn dev`. All the pages could be accessed under **pages** folder and the backend apis in **pages > api** folder.
[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on say `/api/get-comments`. This endpoint can be edited in `pages/api/get-comments.js`.

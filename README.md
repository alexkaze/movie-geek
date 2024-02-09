# Movie Geek

## About

**Movie Geek** is a simple service of searhcing for movies, series, TV shows etc., based on public [Kinopoisk API Unofficial](https://kinopoiskapiunofficial.tech).

> [!IMPORTANT]
> The app does not send requests directly to [Kinopoisk API Unofficial](https://kinopoiskapiunofficial.tech), but to a proxy server I developed with Express.js. The proxy server is deployed on [Render](https://render.com/) for free so it spins down with inactivity, which can delay first request by 50 seconds or more. After the first request the server wakes up and responds quickly.

## Website link

https://mv-geek.netlify.app/  
The app is also adapted for the mobile version.

> [!NOTE] 
> The server returns maximum of 5 pages.

## Tech stack:

- HTML
- CSS/SCSS (`[name].module.scss`)
- TypeScript/JavaScript
- ReactJS, React Router, Redux Toolkit + `createAsyncThunk`
- Jest + React Testing Library (unit and integration testing)
- Webpack 5
- ESlint + Prettier

> [!NOTE] 
It is not the project created with [Create React App](https://create-react-app.dev) way. It is built and configured with Webpack from scratch.  
Also only a small part of the code is covered by tests.

## Installation and launch

Clone the repository:

```
git clone https://github.com/alexkaze/movie-geek.git
```

Install the project:

```
npm install
```

Run on local server:

```
npm run start
```

## App screenshots
<details><summary><b>Развернуть</b></summary>

[![main](https://github.com/alexkaze/movie-geek/assets/85958340/3a45fd14-3311-4a31-8d7a-46c0e3a4d0ce)](https://mv-geek.netlify.app/)
[![search](https://github.com/alexkaze/movie-geek/assets/85958340/f7810b54-2f51-43d4-8b34-4fc185a20ea6)](https://mv-geek.netlify.app/search?keyword=%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D1%8F)

</details>

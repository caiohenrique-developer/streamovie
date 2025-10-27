<a name="top"></a>

<h1 align="center" style="display: flex; align-items: center; justify-content: center;">
  <a href="https://streamovie.yourdomain.com">
    <img alt="Streamovie logotipo" src="src/assets/Streamovie-logo-2.svg" style="width: 100px; margin-right: 20px" />
  </a>
  Streamovie
</h1>

<h5 align="center">
  🎬 Streamovie, an application to explore movies, create favorites lists, and discover new content via TMDB API.
</h5>

<br/>

<strong style="display: flex; align-items: center; justify-content: space-between; font-size: 18px;">💎 Roadmap<a href="#top" name="roadmap" style="font-size: 20px;">🔝</a></strong>

- [x] Base structure with React + Vite + TypeScript  
- [x] Explore popular movies from the TMDB API
- [x] Movie listing, search, and favorite functionality
- [x] Create custom favorite lists
- [x] Routing and navigation with React Router
- [x] Global state management with Redux Toolkit
- [x] Full responsiveness with Tailwind CSS
- [x] Error handling and loading states
- [x] Clean code organization and architecture
- [x] Unit testing with Vitest and Testing Library
- [x] Production deployment

<br />

<strong style="display: flex; align-items: center; justify-content: space-between; font-size: 18px;">📂 Pages structure<a href="#top" name="roadmap" style="font-size: 20px;">🔝</a></strong>

###### 🏠 Home (`/`)
<details open> <summary>Collapsible 🕹️<sup>🤏</sup></summary>

- Fixed header with logo, global search bar, and navigation menu
- Responsive grid displaying popular movies
- Paginated movie listing
- Each movie card displays:
  - Title
  - Poster (`https://image.tmdb.org/t/p/w300/{poster_path}`)  
  - TMDB rating
  - Favorite icon
  
</details>

###### 🎞️ Detalhes do Filme (`/movie/:id`)
<details open> <summary>Collapsible 🕹️<sup>🤏</sup></summary>

- Large image on the left and content on the right
- Displays title, genres, release date, rating, and synopsis
- Button to add or remove from favorites

</details>


###### ❤️ Favoritos (`/favorites`)
<details open> <summary>Collapsible 🕹️<sup>🤏</sup></summary>

- Grid layout similar to the Home page
- List of favorited movies
- Trash icon to remove a movie from favorites
- Sorting filters by:
  - Title (A–Z / Z–A)
  - Rating (↑↓)
- Empty state with image, info message, and call-to-action

</details>

###### 🔍 Busca (`/search?q=termo`)
<details open> <summary>Collapsible 🕹️<sup>🤏</sup></summary>

- Synchronized search bar
- Results displayed in a grid layout
- Highlight of the searched term
- Paginated search results

</details>

<br/>

<strong style="display: flex; align-items: center; justify-content: space-between; font-size: 18px;">🏗️ Project Architecture<a href="#top" name="roadmap" style="font-size: 20px;">🔝</a></strong>

```
/src
  /assets
  /components
    /ui
    /layout
  /config
  /features
    /home
    /movieDetails
    /favorites
    /pageNotFound
    /search
  /routes
  /services
  /stores
  /tests
  /types
  /utils
```

<br/>

<strong style="display: flex; align-items: center; justify-content: space-between; font-size: 18px;">🛸 Techs<a href="#top" name="technologies" style="font-size: 20px;">🔝</a></strong>

This project was developed with the following technologies:

| dependencies | Description |
|-------------|------------|
| [Vite](https://vitejs.dev) | Fast and optimized bundler |
| [React 19](https://reactjs.org/) | Tha main library of the application |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Global state management |
| [React Router DOM](https://reactrouter.com/) | Pages routing |
| [ShadCN UI](https://ui.shadcn.com/) | Custom accessible components |
| [Radix UI](https://www.radix-ui.com/) | Accessible components |
| [TailwindCSS](https://tailwindcss.com/) | Easy to style and create responsive app |
| [Embla Carousel](https://www.embla-carousel.com/) | Lib to handle carousel application |
| [React Hook Form](https://react-hook-form.com/) | Easy to deal with form handler |
| [Lucide React](https://lucide.dev/) | Lightweight and modern icons |
| [Axios](https://axios-http.com/) | To make API HTTP request |
| [TMDB API](https://developer.themoviedb.org) | The Movie Database API |
| [Zod](https://zod.dev/) | Data validation |

| devDependencies | Description |
|-------------|------------|
| [TypeScript](https://www.typescriptlang.org/) | Static type to be more readable |
| [Vitest](https://vitest.dev/) + [React Testing Library (RTL)](https://testing-library.com/) | Unit tests |

| Others | Description |
|-------------|------------|
| [VS Code](https://code.visualstudio.com/) with [Biome](https://biomejs.dev) | Visual Studio Code (IDE) with Biome as linter |

<br/>

<strong style="display: flex; align-items: center; justify-content: space-between; font-size: 18px;">⚙️ API — The Movie Database (TMDB)<a href="#top" name="roadmap" style="font-size: 20px;">🔝</a></strong>

The application consumes the [API do TMDB](https://developers.themoviedb.org/3) to list, search, and display detailed information about movies.
You need to create a free account and generate your own **API Access Token**.

**Main Endpoints:**

| Endpoint | Description |
|-----------|------------|
| `/movie/popular` | List of popular movies |
| `/search/movie?query={termo}` | Movie search |
| `/movie/{id}` | Details of a specific movie |

<br/>

<strong style="display: flex; align-items: center; justify-content: space-between; font-size: 18px;">⚠️ Prerequisites<a href="#top" name="roadmap" style="font-size: 20px;">🔝</a></strong>

Before running this project locally, you need to have:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/) >= v18
- [Yarn](https://yarnpkg.com/) >= v1.22 or npm >= 8
- Account and API Access Token from TMDB

<br />

Make sure you have a valid TMDB API Access Token and your environment set up.

1. Create a free account: [TMDB](https://www.themoviedb.org/)
2. Generate an API Access Token: [TMDB API](https://www.themoviedb.org/settings/api)
3. Create a `.env` file based on `.env.example` with your API Access Token

###### 🧾 .env.example
```bash
VITE_TMDB_API_KEY=your_api_key_here
VITE_TMDB_API_URL=https://api.themoviedb.org/3
```

<br/>

<strong style="display: flex; align-items: center; justify-content: space-between; font-size: 18px;">❔ How To Use<a href="#top" name="roadmap" style="font-size: 20px;">🔝</a></strong>

_From your `command line` follow these steps..._
<img align="right" src="https://img.shields.io/badge/Project%20Status%20-🚀%20(Production)%20🚀-2C8EBB?style=flat&logo=statuspage&logoColor=white&color=blue"/>

###### Clone the repository and start the project locally:
```bash
$ git clone https://github.com/caiohenrique-developer/streamovie
$ cd streamovie
```

###### Install dependencies:
```bash
$ yarn
```

###### ...or (if you prefer npm):
```bash
$ npm install
```

###### Start the development server
```bash
$ yarn dev
```

###### ...or (if you prefer npm):
```bash
$ npm run dev
```

_You'll be able to see the URL http://localhost:{port} on your command line._

_So open them and just enjoy this project! ;)_

#### ⚠️ Atention:
Don't forget to create your .env file based on .env.example

<br/>

🚀 Production URL: https://streamovie-psi.vercel.app/

<br/>

<strong style="display: flex; align-items: center; justify-content: space-between; font-size: 18px;">🔖 Badges<a href="#top" name="roadmap" style="font-size: 20px;">🔝</a></strong>

<p align="center"> 
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/caiohenrique-developer/streamovie"> 
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/caiohenrique-developer/streamovie"> 
  <img alt="Markdown" src="https://img.shields.io/badge/Markdown-000000?style=flat&logo=markdown&logoColor=white"/> 
  <img alt="VSCode" src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=flat&logo=visual%20studio%20code&logoColor=white"/> 
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white"/> 
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white"/> 
  <img alt="Vitest" src="https://img.shields.io/badge/Vitest-729B1B?style=flat&logo=vitest&logoColor=white"/> 
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white"/> 
  <img alt="Redux" src="https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=flat&logo=redux&logoColor=white"/> 
  <img alt="Axios" src="https://img.shields.io/badge/Axios-5A29E4?style=flat&logo=axios&logoColor=white"/> 
  <img alt="ReactJS" src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB"/>
</p>

<br>

<strong style="display: flex; align-items: center; justify-content: space-between; font-size: 18px;">☎ Contact Me<a href="#top" name="roadmap" style="font-size: 20px;">🔝</a></strong>

<blockquote align="center">
  “Always running in search of new movies!” <br> Done with ☕ by Caio Henrique 👇 <a href="#-contact-me-phone">Get in touch!</a>
</blockquote>

<br>

<p>
  <a href="https://linktr.ee/caio.hsc"> 
    <img align="center" alt="LinkedIn" src="https://img.shields.io/badge/Caio%20Henrique-0077B5?logo=linkedin&logoColor=white&style=flat-square" /> 
  </a> 
  <a href="mailto:caiohenrique.developer@gmail.com"> 
    <img align="center" alt="Gmail" src="https://img.shields.io/badge/caiohenrique.developer@gmail.com-D14836?logo=gmail&logoColor=white&style=flat-square" /> 
  </a> 
  <a href="https://api.whatsapp.com/send?phone=5511943902438&text=Fala%20Caio,%20como%20vai?"> 
    <img align="center" alt="Whatsapp" src="https://img.shields.io/badge/(11)%2094390%202438-25D366?style=social&logo=whatsapp&logoColor=black" /> 
  </a> 
</p>
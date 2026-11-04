# Backlog Bird

A game backlog built with React and TypeScript as part of my Front End Developer studies at Medieinstitutet.

For keeping track of the games you're playing, the games you're definitely going to play and the ones we don't talk about anymore.

Ironically built by someone who doesn't play games.

![React](https://img.shields.io/badge/React-202221?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-202221?style=for-the-badge&logo=typescript&logoColor=3178C6)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-202221?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4)
![Vite](https://img.shields.io/badge/Vite-202221?style=for-the-badge&logo=vite&logoColor=646CFF)
![React Router](https://img.shields.io/badge/React_Router-202221?style=for-the-badge&logo=reactrouter&logoColor=CA4245)

## Live site

**[View Backlog Bird](https://backlog-bird-git-main-lollolicense.vercel.app/)**

## About the project

Backlog Bird is a CRUD application connected to the Questlog API. It lets you keep a personal game backlog and track what you want to play, what you are currently playing and what happened to the games you swore you would finish.

### Features

- View all games in the backlog
- Filter games by status: Want to play, Playing, Completed and Dropped
- View individual game details
- Add new games
- Edit existing games
- Delete games
- Add ratings and notes
- Status filter saved between visits using localStorage
- Loading and error states
- Responsive layout for different screen sizes

## Design

The layout and visual identity were designed in Figma before development, including the Backlog Bird logo.

I wanted it to feel like its own thing rather than yet another dark and neon gaming interface.

## Getting started

Clone the repository and install the dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Create a production build:
```bash
npm run build
```

## API

The project uses the Questlog API to store and manage the game backlog.

**Handle:** `backlog-bird`

The handle keeps the games for this project separate from games created by other users of the API.

## Custom hooks

The application uses custom hooks to keep the API logic separate from the components.

`useGames` handles the collection of games. It fetches the full game list and handles adding new games.

`useGame` takes a game ID and handles the API requests for that specific game, including fetching, updating and deleting it.

`useLocalStorage` stores the selected status filter, so the filter stays the same even after reloading the page.

I chose to keep this logic in custom hooks instead of putting the fetch requests directly in the components. This keeps the components focused on the UI and separates the logic for the game collection from the logic for an individual game.

## Target grade

**VG**

## That's it!

Thanks for stopping by ✌️
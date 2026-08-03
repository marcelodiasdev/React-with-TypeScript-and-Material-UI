# React + TypeScript: Registration & Authentication System

A registration and authentication system built with React and TypeScript, using Material UI for a modern, responsive interface. Includes token-based auth, private routes and reactive state management.

## Features

- Home page
- Login form: sends a POST request and stores the authentication token
- Registration form: sends a POST request
- Specialist registration modal: sends a POST request with the token in the header
- Private dashboard route, protected by authentication

## Tech & Techniques

- **React** — library for building user interfaces
- **TypeScript** — static typing on top of JavaScript
- **Material UI (MUI)** — React component library for modern, responsive UIs
- **React Router DOM** — routing, used to build the private dashboard route
- **MobX** — state management with observables, reactions and actions for reactive data

## Getting started

    # clone the repository
    git clone https://github.com/marcelodiasdev/React-with-TypeScript-and-Material-UI.git

    # web client
    cd web
    npm install
    npm run dev

    # server (in a separate terminal)
    cd server
    npm install
    npm run dev

> Adjust the run scripts (`dev` / `start`) to match the ones in each package.json.

# Starwars Story Generator AI
Using [Star Wars API](https://swapi.dev/documentation), and OpenAi's [GPT-3](https://openai.com/blog/openai-api/) to generate a a Starwar story based on the user's input.

## Features
1. Character Selection: Allow users to browse and select their favorite Star Wars characters from a comprehensive list. Provide information about each character, such as their name, image, affiliation, and a brief description.
  - Choosing: Heroes, Sidekicks, and Villains/Enemies. 
2. Setting Selection: Provide a variety of Star Wars settings, such as Tatooine, Hoth, or Coruscant. Users can choose their preferred location as the backdrop for their story.
3. Plot Options: Offer different plot options or story templates to provide users with a starting point. 
  - Choosing adventure: "rescue mission', "bounty hunting adventure," or "rebellion against the Empire."
4. Story Generation: Utilize the selected character, setting, and other elements as prompts for the ChatGPT model to generate a unique and personalized Star Wars story. The model can dynamically respond to user inputs and provide a coherent narrative.
5. Story Sharing: Allow users to share their generated story on social media platforms, such as Facebook, Twitter, or Instagram.

## User Stories
1. As a user, I want to be able to select my favorite Star Wars characters from a comprehensive list.
2. As a user, I want to be able to select my preferred Star Wars setting.
3. As a user, I want to be able to select a plot option or story template.
4. As a user, I want to be able to generate a unique and personalized Star Wars story based on my selected characters, setting, and plot.
5. As a user, I want to be able to share my generated story on social media platforms.

## MVP
- Create a React app that allows users to select their favorite Star Wars characters from a comprehensive list.
- Create a React app that allows users to select their preferred Star Wars setting.
- Create a React app that allows users to select a plot option or story template.
- Create a React app that allows users to generate a unique and personalized Star Wars story based on their selected characters, setting, and plot.
- Create a React app that allows users to share their generated story on social media platforms.

## TECH STACK
- Star Wars API
- React
- React Router
- Redux tool
- Typescript
- React Testing Library
- React Bootstrap
- React Icons
- React Share
- OpenAI's GPT-3
- Jest**
- Axios**
- Material UI / Tailwind Css**
## Project Delivery
- [x] Complete MVP
- [ ] Complete Post-MVP
- [ ] Present Project

## Getting Started
#### Run App

Must run server and client separately so that the server can proxy requests to the OpenAI API so that the API key is not exposed to the client. You will need an Api key from OpenAI to run the server.
```bash
cd server
npm install
node server.js
```

To run the client. 
```bash
cd .
npm install
npm start
```

#### Test App

```bash
npm run test
```

#### UI Component Library

This project has pre-installed the [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/accordion) library for convenience. It is not required to use this component library.

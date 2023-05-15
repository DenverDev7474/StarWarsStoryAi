# Starwars Story Generator AI
Using [Star Wars API](https://swapi.dev/documentation), and OpenAi's [GPT-3](https://openai.com/blog/openai-api/) to generate a a Starwar story based on the user's input.

## MVP Features
1. Character Selection: Allow users to browse and select their favorite Star Wars characters from a comprehensive list. Provide information about each character, such as their name, affiliation, and a brief description.
  - Choosing: Heroes, Sidekicks, and Villains/Enemies. 
2. Setting Selection: Provide a variety of Star Wars settings, such as Tatooine, Hoth, or Coruscant. Users can choose their preferred location as the backdrop for their story.
3. Story Generation: Utilize the selected character, setting, and other elements as prompts for the ChatGPT model to generate a unique and personalized Star Wars story. The model can dynamically respond to user inputs and provide a coherent narrative.

## After MVP Features
1. Plot Options: Offer different plot options or story templates to provide users with a starting point. 
  - Choosing adventure: "rescue mission', "bounty hunting adventure," or "rebellion against the Empire."
2. Story Sharing: Allow users to share their generated story on social media platforms, such as Facebook, Twitter, or Instagram.
3. Additional CSS.
4. Clear Button to re-initiate story generator. 
5. Adding Image Api, or movie database to add images to file. 
6. Error handling for lists. 

## User Stories
1. As a user, I want to be able to select my favorite Star Wars characters from a comprehensive list.
  - As a user, I want to selecte specific characters as either Villian, Hero, or Sidekick.
  - As a user, I should not be able to select Characters that have already been selected. 
2. As a user, I want to be able to select my preferred Star Wars setting.
  - As a user, I should not be able to select another location if one is already selected.
3. As a user, I want to be able to generate a unique and personalized Star Wars story based on my selected characters, setting, vehicles. 

## TECH STACK
- Star Wars API
- React
- React Router
- Redux toolkit
- Typescript
- OpenAI's GPT-3
- React Bootstrap
- Axios

Additional Tech stacks that could be included
- React Icons
- React Testing Library or Jest
- React Share
- Material UI or Tailwind Css
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

No test was done for MVP. 
```bash
npm run test
```

#### UI Component Library

This project has pre-installed the [React Bootstrap](https://react-bootstrap.netlify.app/docs/components/accordion) library for convenience. It is not required to use this component library.

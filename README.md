# Star Wars Story Generator AI
Using the [Star Wars API](https://swapi.dev/documentation), and OpenAi's [GPT-3](https://openai.com/blog/openai-api/) this project generates a personalized Star Wars story based on user input.
## MVP Features
1. Character Selection: Users can browse and select their favorite Star Wars characters from a comprehensive list. Each character's name, affiliation, and a brief description are provided.
- Choosing: Heroes, Sidekicks, and Villains/Enemies.
2. Setting Selection: Users can choose from a variety of Star Wars settings, such as Tatooine, Hoth, or Coruscant, to set the backdrop for their story.
3. Story Generation: The ChatGPT model utilizes the selected characters, settings, and other elements as prompts to generate a unique and personalized Star Wars story. The model can dynamically respond to user inputs and provide a coherent narrative..

## Additional Featues
1. Plot Options: Users can choose from different plot options or story templates to provide a starting point, such as "rescue mission","bounty hunting adventure", or "rebellion against the Empire."
2. Story Sharing: Users can easily share their generated story on social media platforms like Facebook, Twitter, or Instagram.
3. Additional CSS styling.
4. Clear Button: A button to re-initiate the story generator and start fresh. (Completed 05/23/2021)
5. Image Integration: Integration with an Image API or movie database to add relevant images to the generated story.
6. Error Handling: Implement error handling for lists and other potential errors.
7. Better seperation of concerns: Making components into smaller components by , moving business logic into custom hooks.
8. Adding a selected state so that characters, settings, starships that are already selected to a list cannot be added to story. 
9. Adding test coverage for components and redux using Jest and React Testing Library.
## User Stories
1. As a user, I want to select my favorite Star Wars characters from a comprehensive list.
- As a user, I want to specify whether a character is a Villain, Hero, or Sidekick.
- As a user, I should not be able to select characters that have already been chosen.
2. As a user, I want to choose my preferred Star Wars setting.
- As a user, I should not be able to select another location if one is already chosen.
3. As a user, I want to generate a unique and personalized Star Wars story based on my selected characters, settings, and vehicles. 

## TECH STACK
- Star Wars API
- React
- React Router
- Redux toolkit
- TypeScript
- OpenAI's GPT-3
- React Bootstrap
- Axios

Additional technologies that could be considered:
- React Icons
- React Testing Library or Jest
- React Share
- Material UI or Tailwind CSS

## Project Delivery
- [x] Complete MVP
- [ ] Complete additional features
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

## Thank you for your consideration!
Let me know if you have any questions or feedback. I look forward to hearing from you!

## Updates and Improvements
• 05/23/2023: Fixed and updated Redux to persist and clear generator story




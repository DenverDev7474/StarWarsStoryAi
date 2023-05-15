import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface Story {
  hero: string;
  sidekick: string;
  villain: string;
  setting: string;
  adventure: string;
  villainStarship: string;
  heroStarship: string;
  completedStory: string;
}

// const adventure = "A story about man vs. time."
// const hero = "Luke Skywalker"
// const villain = "Darth Vader"
//   const setting = "Tatooine"
//   const starship = "Millennium Falcon"
//   const starship2 = "Death Star"
//   const sidekick = "Chewbacca"
//   const sidekick2 = "R2-D2"


const initialState: Story = {
  hero: '',
  sidekick: '',
  villain: '',
  setting: '',
  adventure: '',
  villainStarship: '',
  heroStarship: '',
  completedStory: ''
};

const generatorSlice = createSlice({
  name: 'generator',
  initialState,
  reducers: {
    setHero(state, action: PayloadAction<string>) {
      state.hero = action.payload;
    },
    setSidekick(state, action: PayloadAction<string>) {
      state.sidekick = action.payload;
    },
    setVillain(state, action: PayloadAction<string>) {
      state.villain = action.payload;
    },
    setSetting(state, action: PayloadAction<string>) {
      state.setting = action.payload;
    },
    setAdventure(state, action: PayloadAction<string>) {
      state.adventure = action.payload;
    },
    setVillainStarship(state, action: PayloadAction<string>) {
      state.villainStarship = action.payload;
    },
    setHeroStarship(state, action: PayloadAction<string>) {
      state.heroStarship = action.payload;
    },
    setCompletedStory(state, action: PayloadAction<string>) {
      state.completedStory = action.payload;
    }

  },
}); 

export const { 
  setHero,
  setSidekick, 
  setVillain, 
  setSetting,
  setAdventure, 
  setVillainStarship, 
  setHeroStarship,
  setCompletedStory
} = generatorSlice.actions;

export default generatorSlice.reducer;



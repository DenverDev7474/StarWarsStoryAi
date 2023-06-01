import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Story {
  hero: string;
  sidekick: string;
  villain: string;
  setting: string;
  villainStarship: string;
  heroStarship: string;
  completedStory: string;
}

const initialState: Story = {
  hero: "",
  sidekick: "",
  villain: "",
  setting: "",
  villainStarship: "",
  heroStarship: "",
  completedStory: "",
};

const generatorSlice = createSlice({
  name: "generator",
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
    setVillainStarship(state, action: PayloadAction<string>) {
      state.villainStarship = action.payload;
    },
    setHeroStarship(state, action: PayloadAction<string>) {
      state.heroStarship = action.payload;
    },
    setCompletedStory(state, action: PayloadAction<string>) {
      state.completedStory = action.payload;
    },
    setResetEmpty() {
      return initialState;
    },
    setRemoveCharacter(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case state.hero:
          state.hero = "";
          break;
        case state.sidekick:
          state.sidekick = "";
          break;
        case state.villain:
          state.villain = "";
          break;
        default:
          break;
      }
    },
    setRemoveSetting(state, action: PayloadAction<string>) {
      if (action.payload === state.setting) {
        state.setting = "";
      }
    },
    setRemoveStarship(state, action: PayloadAction<string>) {
      switch (action.payload) {
        case state.villainStarship:
          state.villainStarship = "";
          break;
        case state.heroStarship:
          state.heroStarship = "";
          break;
        default:
          break;
      }
    }
  },
}
);

export const {
  setHero,
  setSidekick,
  setVillain,
  setSetting,
  setVillainStarship,
  setHeroStarship,
  setCompletedStory,
  setResetEmpty,
  setRemoveCharacter,
  setRemoveSetting,
  setRemoveStarship,
} = generatorSlice.actions;

export default generatorSlice.reducer;

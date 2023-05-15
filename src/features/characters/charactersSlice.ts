import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { getCharacters } from "../../api/starwarsApi";

interface CharactersState {
  loading: boolean;
  error: string | null;
  data: Character[];
}

export interface Character {
  name: string;
  gender: string;
  height: string;
  mass: string;
}

const initialState: CharactersState = {
  loading: false,
  error: null,
  data: [],
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getCharactersStart(state) {
      state.loading = true;
      state.error = null;
      state.data = [];
    },
    getCharactersSuccess(state, action: PayloadAction<Character[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    getCharactersFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCharactersStart,
  getCharactersSuccess,
  getCharactersFailure,
} = charactersSlice.actions;

export const fetchCharacters = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getCharactersStart());
    const characters = await getCharacters();
    dispatch(getCharactersSuccess(characters));
  } catch (error: any) {
    let errorMessage = "Unknown error occurred";
    if (error.response) {
      if (error.response.status === 404) {
        errorMessage = "Characters not found";
      } else if (error.response.status === 500) {
        errorMessage = "Server error. Please try again later";
      }
    } else if (error.message) {
      errorMessage = error.message;
    }
    dispatch(getCharactersFailure(errorMessage));
  }
};

export default charactersSlice.reducer;

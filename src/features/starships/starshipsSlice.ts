import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { getStarships } from "../../api/starwarsApi";

interface starshipsState {
  loading: boolean;
  error: string | null;
  data: Starship[];
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  passengers: string;
  hyperdrive_rating: string;
  crew: string;
  cargo_capacity: string;
  consumables: string;
}

const initialState: starshipsState = {
  loading: false,
  error: null,
  data: [],
};

const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    getStarshipsStart(state) {
      state.loading = true;
      state.error = null;
      state.data = [];
    },
    getStarshipsSuccess(state, action: PayloadAction<Starship[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    getStarshipsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    }
  },
});

export const {
  getStarshipsStart,
  getStarshipsSuccess,
  getStarshipsFailure,
} = starshipsSlice.actions;

export const fetchStarships = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getStarshipsStart());
    const starships = await getStarships();
    dispatch(getStarshipsSuccess(starships));
  } catch (error: any) {
    let errorMessage = 'Unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    dispatch(getStarshipsFailure(errorMessage));
  }
};

export default starshipsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { getSettings } from "../../api/starwarsApi";

interface SettingsState {
  loading: boolean;
  error: string | null;
  data: Setting[];
}
export interface Setting {
  name: string;
  gravity: string;
  population: string;
  rotation_period: string;
  surface_water: string;
  terrain: string;
}

const initialState: SettingsState = {
  loading: false,
  error: null,
  data: [],
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    getSettingsStart(state) {
      state.loading = true;
      state.error = null;
      state.data = [];
    },
    getSettingsSuccess(state, action: PayloadAction<Setting[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    getSettingsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getSettingsStart, getSettingsSuccess, getSettingsFailure } =
  settingsSlice.actions;

export const fetchSettings = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getSettingsStart());
    const settings = await getSettings();
    dispatch(getSettingsSuccess(settings));
  } catch (error: any) {
    let errorMessage = "Unknown error occurred";
    if (error.response) {
      if (error.response.status === 404) {
        errorMessage = "Settings not found";
      } else if (error.response.status === 500) {
        errorMessage = "Server error";
      }
    }
    dispatch(getSettingsFailure(errorMessage));
  }
};

export default settingsSlice.reducer;

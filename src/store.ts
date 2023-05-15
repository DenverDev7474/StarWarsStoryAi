import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import charactersReducer from '../src/features/characters/charactersSlice';
import settingsReducer from '../src/features/settings/settingsSlice';
import starshipsReducer from '../src/features/starships/starshipsSlice';
import generatorReducer from '../src/features/generator/generatorSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    settings: settingsReducer,
    starships: starshipsReducer,
    generator: generatorReducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


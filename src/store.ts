import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import charactersReducer from '../src/features/characters/charactersSlice';
import settingsReducer from '../src/features/settings/settingsSlice';
import starshipsReducer from '../src/features/starships/starshipsSlice';
import generatorReducer from '../src/features/generator/generatorSlice';
import { useDispatch } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCharactersReducer = persistReducer(persistConfig, charactersReducer);
const persistedSettingsReducer = persistReducer(persistConfig, settingsReducer);
const persistedStarshipsReducer = persistReducer(persistConfig, starshipsReducer);
const persistedGeneratorReducer = persistReducer(persistConfig, generatorReducer);

export const store = configureStore({
  reducer: {
    characters: persistedCharactersReducer,
    settings: persistedSettingsReducer,
    starships: persistedStarshipsReducer,
    generator: persistedGeneratorReducer,
  },
});

export const persistor = persistStore(store);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

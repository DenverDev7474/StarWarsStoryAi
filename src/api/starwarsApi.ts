import axios from "axios";
import { Character } from "../features/characters/charactersSlice";
import { Setting } from "../features/settings/settingsSlice";
import { Starship } from "../features/starships/starshipsSlice";

const BASE_URL = "https://swapi.py4e.com/api/";

export const getCharacters = async () => {
  let allCharacters = [] as Character[];
  let nextPage = `${BASE_URL}/people/`;
  while (nextPage) {
    const response = await axios.get(nextPage);
    allCharacters = [...allCharacters, ...response.data.results];
    nextPage = response.data.next;
  }
  return allCharacters;
};

export const getSettings = async () => {
  let allSettings = [] as Setting[];
  let nextPage = `${BASE_URL}/planets/`;
  while (nextPage) {
    const response = await axios.get(nextPage);
    allSettings = [...allSettings, ...response.data.results];
    nextPage = response.data.next;
  }
  return allSettings;
};

export const getStarships = async () => {
  let allStarships = [] as Starship[];
  let nextPage = `${BASE_URL}/starships/`;
  while (nextPage) {
    const response = await axios.get(nextPage);
    allStarships = [...allStarships, ...response.data.results];
    nextPage = response.data.next;
  }
  return allStarships;
};

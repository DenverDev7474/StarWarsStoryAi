import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Character, fetchCharacters } from './features/characters/charactersSlice';
import { Setting, fetchSettings } from './features/settings/settingsSlice';
import { Starship, fetchStarships } from './features/starships/starshipsSlice';
import { useAppDispatch } from './store';
import { RootState } from './store'; // Adjust this import to your file structure

function App() {
  const dispatch = useAppDispatch();
  const characters = useSelector((state: RootState) => state.characters);
  const settings = useSelector((state: RootState) => state.settings);
  const starships = useSelector((state: RootState) => state.starships);

  useEffect(() => {
    dispatch(fetchCharacters());
    dispatch(fetchSettings());
    dispatch(fetchStarships());
  }, [dispatch]);



  return (
    <div className="container">
      <h1>Star Wars Characters</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Height</th>
            <th>Mass</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {characters.loading ? (
           <div>Loading...</div>
          ) : (
            characters.data.map((character: Character) => (
              <tr key={character.name}>
                <td>{character.name}</td>
                <td>{character.gender}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td><button>Add to Story</button></td>
              </tr> 
            ))
          )}
        </tbody>
      </table>
      <h1>Star Wars Settings</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gravity</th>
            <th>rotation_period</th>
            <th>surface_water</th>
            <th>terrain</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {settings.loading ? (
           <div>Loading...</div>
          ) : (
            settings.data.map((setting: Setting) => (
              <tr key={setting.name}>
                <td>{setting.name}</td>
                <td>{setting.gravity}</td>
                <td>{setting.population}</td>
                <td>{setting.rotation_period}</td>
                <td>{setting.surface_water}</td>
                <td>{setting.terrain}</td>
                <td><button>Add to Story</button></td>
              </tr> 
            ))
          )}
        </tbody>
      </table>
      <h1>Star Wars StarShips</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>model</th>
            <th>manufacturer</th>
            <th>passengers</th>
            <th>hyperdrive_rating</th>
            <th>crew</th>
            <th>cargo_capacity</th>
            <th>consumables</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {starships.loading ? (
           <div>Loading...</div>
          ) : (
            starships.data.map((starship: Starship) => (
              <tr key={starship.name}>
                <td>{starship.name}</td>
                <td>{starship.model}</td>
                <td>{starship.manufacturer}</td>
                <td>{starship.passengers}</td>
                <td>{starship.hyperdrive_rating}</td>
                <td>{starship.crew}</td>
                <td>{starship.cargo_capacity}</td>
                <td>{starship.consumables}</td>
                <td><button>Add to Story</button></td>
              </tr> 
            ))
          )}
        </tbody>
      </table>
    </div>  
  );
};

export default App;

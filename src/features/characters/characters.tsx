import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Character, fetchCharacters } from './charactersSlice';
import { useAppDispatch, RootState} from '../../store';

function Characters() {
  const dispatch = useAppDispatch();
  const characters = useSelector((state: RootState) => state.characters);

  useEffect(() => {
    dispatch(fetchCharacters());
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
        {characters.loading ? (
           <div>Loading...</div>
          ) : (
            characters.data.map((character: Character) => (
            <tbody>
              <tr key={character.name}>
                <td>{character.name}</td>
                <td>{character.gender}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td><button>Add to Story</button></td>
              </tr> 
            </tbody>
            ))
          )}
      </table>
    </div>  
  );
};

export default Characters;

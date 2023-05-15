import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Character, fetchCharacters } from './charactersSlice';
import { useAppDispatch, RootState } from '../../store';
import RoleModal from './roleModal';


function Characters() {
  const dispatch = useAppDispatch();
  const characters = useSelector((state: RootState) => state.characters);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(null);
  const [addedCharacters, setAddedCharacters] = useState<string[]>([]);


  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const openModal = (character: Character) => {
    setCurrentCharacter(character);
    setIsModalOpen(true);
  };

  const closeModalAfterSelection = () => {
    setIsModalOpen(false);
    if (currentCharacter ) {
      setAddedCharacters([...addedCharacters, currentCharacter.name]);
    }
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isAdded = (characterName: string) => {
    return addedCharacters.includes(characterName);
  };

  return (
    <div className="container">
      <h1>Star Wars Characters</h1>
      {characters.loading ? (
        <div>Loading...</div>
      ) : (
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
            {characters.data && characters.data.map((character: Character) => (
              <tr key={character.name}>
                <td>{character.name}</td>
                <td>{character.gender}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td><button disabled={isAdded(character.name)}  onClick={() => openModal(character)}>Add to Story</button></td>
              </tr> 
            ))}
          </tbody>
        </table>
      )}
      <RoleModal 
        show={isModalOpen}
        character={currentCharacter!} 
        onClose={closeModal} 
        selected={closeModalAfterSelection}
    />
    </div>  
  );
};

export default Characters;

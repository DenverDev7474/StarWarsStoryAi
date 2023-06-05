import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Character, fetchCharacters } from "./charactersSlice";
import { useAppDispatch, RootState } from "../../store";
import RoleModal from "./roleModal";
import { useNavigate } from "react-router-dom"; // Updated import
import { setRemoveCharacter } from "../generator/generatorSlice";
import { Modal, Button } from "react-bootstrap"



const Characters = () => {
  const dispatch = useAppDispatch();
  const characters = useSelector((state: RootState) => state.characters);
  const selectedCharacters = useSelector(
    (state: RootState) => state.generator
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState<Character | null>(
    null
  );
  const [addedCharacters, setAddedCharacters] = useState<string[]>([]);

  useEffect(() => {
    if (selectedCharacters.hero || selectedCharacters.sidekick || selectedCharacters.villain){
      setAddedCharacters([selectedCharacters.hero, selectedCharacters.sidekick, selectedCharacters.villain]);
    }
  }, [selectedCharacters.hero, selectedCharacters.sidekick, selectedCharacters.villain]);


  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const openModal = (character: Character) => {
    if (selectedCharacters.hero && selectedCharacters.sidekick && selectedCharacters.villain) {
      setIsAlertModalOpen(true);
    } else {
      setCurrentCharacter(character);
      setIsModalOpen(true);
    }
  };

  const closeModalAfterSelection = () => {
    setIsModalOpen(false);
    if (currentCharacter) {
      setAddedCharacters([...addedCharacters, currentCharacter.name]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isAdded = (characterName: string) => {
    return addedCharacters.includes(characterName);
  };

  const handleRemoveCharacter = (characterName: string) => {
    setAddedCharacters(addedCharacters.filter((name) => name !== characterName));
    dispatch(setRemoveCharacter(characterName));
  };



  return (
    <div className="container">
      <h1>Add Star Wars Characters</h1>
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {characters.data &&
              characters.data.map((character: Character) => (
                <tr key={character.name}>
                  <td>{character.name}</td>
                  <td>{character.gender}</td>
                  <td>{character.height}</td>
                  <td>{character.mass}</td>
                  <td>
                    <button
                      disabled={isAdded(character.name)}
                      onClick={() => openModal(character)}
                    >
                      Add to Story
                    </button>
                  </td>
                  <td>
                    <button
                      disabled={!isAdded(character.name)}
                      onClick={() => { handleRemoveCharacter(character.name) }} >
                      Remove from Story
                    </button>
                  </td>
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
      <Modal show={isAlertModalOpen} onHide={() => { setIsAlertModalOpen(false)} }>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Characters are already select!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setIsAlertModalOpen(false)} }>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Characters;

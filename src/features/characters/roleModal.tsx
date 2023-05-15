import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setHero, setSidekick, setVillain } from "../generator/generatorSlice";
import { Character } from "./charactersSlice";
import { RootState } from "../../store";

interface RoleModalProps {
  character: Character;
  onClose: () => void;
  selected: () => void;
  show: boolean;
}

const RoleModal = ({ character, onClose, selected, show }: RoleModalProps) => {
  const dispatch = useDispatch();
  const story = useSelector((state: RootState) => state.generator);

  const { hero, sidekick, villain } = story;

  const addAsHero = () => {
    dispatch(setHero(character.name));
    selected();
  };

  const addAsSidekick = () => {
    dispatch(setSidekick(character.name));
    selected();
  };

  const addAsVillain = () => {
    dispatch(setVillain(character.name));
    selected();
  };

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Add {character?.name} to Story</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button variant="primary" onClick={addAsHero} disabled={!!hero}>
          Add as Hero
        </Button>
        <Button
          variant="secondary"
          onClick={addAsSidekick}
          disabled={!!sidekick}
        >
          Add as Sidekick
        </Button>
        <Button variant="danger" onClick={addAsVillain} disabled={!!villain}>
          Add as Villain
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RoleModal;

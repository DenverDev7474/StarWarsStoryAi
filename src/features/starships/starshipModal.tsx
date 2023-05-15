import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setHeroStarship,
  setVillainStarship,
} from "../generator/generatorSlice";
import { Starship } from "./starshipsSlice";
import { RootState } from "../../store";

interface StarshipModalProps {
  starship: Starship;
  onClose: () => void;
  selected: () => void;
  show: boolean;
}

const StarshipModal = ({
  starship,
  onClose,
  selected,
  show,
}: StarshipModalProps) => {
  const dispatch = useDispatch();
  const story = useSelector((state: RootState) => state.generator);

  const { heroStarship, villainStarship } = story;

  const addAsHeroStarship = () => {
    dispatch(setHeroStarship(starship.name));
    selected();
  };

  const addAsVillainStarship = () => {
    dispatch(setVillainStarship(starship.name));
    selected();
  };

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>Add {starship?.name} to Story</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Button
          variant="primary"
          onClick={addAsHeroStarship}
          disabled={!!heroStarship}
        >
          Add as Hero Starship
        </Button>
        <Button
          variant="danger"
          onClick={addAsVillainStarship}
          disabled={!!villainStarship}
        >
          Add as Villain Starship
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

export default StarshipModal;

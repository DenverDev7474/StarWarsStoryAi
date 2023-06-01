import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Starship, fetchStarships } from "./starshipsSlice";
import { useAppDispatch, RootState } from "../../store";
import StarshipModal from "./starshipModal";
import { setRemoveStarship } from "../generator/generatorSlice";
import { Modal, Button } from "react-bootstrap"


const Starships = () => {
  const dispatch = useAppDispatch();
  const starships = useSelector((state: RootState) => state.starships);
  const selectedStarships = useSelector(
    (state: RootState) => state.generator
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [currentStarship, setCurrentStarship] = useState<Starship | null>(null);
  const [addedStarships, setAddedStarships] = useState<string[]>([]);

  useEffect(() => {
    dispatch(fetchStarships());
  }, [dispatch]);

  useEffect(() => {
    if (selectedStarships.heroStarship || selectedStarships.villainStarship) {
      setAddedStarships([
        selectedStarships.heroStarship,
        selectedStarships.villainStarship,
      ]);
    }
  }, [selectedStarships.heroStarship, selectedStarships.villainStarship]);  


  const openModal = (starship: Starship) => {
    if (selectedStarships.heroStarship && selectedStarships.villainStarship) {
      setIsAlertModalOpen(true);
    } else {  
      setCurrentStarship(starship);
      setIsModalOpen(true);
    }
  };

  const closeModalAfterSelection = () => {
    setIsModalOpen(false);
    if (currentStarship) {
      setAddedStarships([...addedStarships, currentStarship.name]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isAdded = (starshipName: string) => {
    return addedStarships.includes(starshipName);
  };

  const handleRemoveStarship = (starshipName: string) => {
    setAddedStarships(addedStarships.filter((name) => name !== starshipName));
    dispatch(setRemoveStarship(starshipName))
  }


  return (
    <div className="container">
      <h1>Add Star Wars StarShips</h1>
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
            <th></th>
          </tr>
        </thead>
        {starships.loading ? (
          <div>Loading...</div>
        ) : (
          starships.data.map((starship: Starship) => (
            <tbody>
              <tr key={starship.name}>
                <td>{starship.name}</td>
                <td>{starship.model}</td>
                <td>{starship.manufacturer}</td>
                <td>{starship.passengers}</td>
                <td>{starship.hyperdrive_rating}</td>
                <td>{starship.crew}</td>
                <td>{starship.cargo_capacity}</td>
                <td>{starship.consumables}</td>
                <td>
                  <button
                    disabled={isAdded(starship.name)}
                    onClick={() => openModal(starship)}
                  >
                    Add to Story
                  </button>
                </td>
                <td>
                  <button
                    disabled={!isAdded(starship.name)}
                    onClick={() => {handleRemoveStarship(starship.name)}}
                  >
                    Remove from Story
                  </button>
                </td>
              </tr>
            </tbody>
          ))
        )}
      </table>
      <StarshipModal
        show={isModalOpen}
        onClose={closeModal}
        selected={closeModalAfterSelection}
        starship={currentStarship!}
      />
      <Modal show={isAlertModalOpen} onHide={() => { setIsAlertModalOpen(false)} }>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Starship already exists!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setIsAlertModalOpen(false)} }>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Starships;

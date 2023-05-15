import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Starship, fetchStarships } from './starshipsSlice';
import { useAppDispatch, RootState } from '../../store';
import StarshipModal from './starshipModal';

function Starships() {
  const dispatch = useAppDispatch();
  const starships = useSelector((state: RootState) => state.starships);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStarship, setCurrentStarship] = useState<Starship | null>(null);
  const [addedStarships, setAddedStarships] = useState<string[]>([]);
  
  useEffect(() => {
    dispatch(fetchStarships());
  }, [dispatch]);

  const openModal = (starship: Starship) => {
    setCurrentStarship(starship);
    setIsModalOpen(true);
  };

  const closeModalAfterSelection = () => {
    setIsModalOpen(false);
    if (currentStarship ) {
      setAddedStarships([...addedStarships, currentStarship.name]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isAdded = (starshipName: string) => {
    return addedStarships.includes(starshipName);
  };
  
  return (
    <div className="container">
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
                <td><button disabled={isAdded(starship.name)} onClick={() => openModal(starship)}>Add to Story</button></td>
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
    </div>  
  );
};

export default Starships;

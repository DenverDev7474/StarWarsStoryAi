import React, { useEffect, useState } from 'react';
import { useAppDispatch, RootState } from '../../store';
import { useSelector } from 'react-redux';
import axios from 'axios';  // Make sure to install axios
import { useNavigate } from 'react-router-dom'; // Updated import
import { setCompletedStory } from './generatorSlice';

function Generator() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [storyComplete, setStoryComplete] = useState(false); 
  const dispatch  = useAppDispatch();
  const story = useSelector((state: RootState) => state.generator);
  const navigate = useNavigate();

  const { hero, sidekick, villain, setting, villainStarship, heroStarship } = story;

  useEffect(() => {
    if ( hero && sidekick && villain && setting && villainStarship && heroStarship) {
      setStoryComplete(true);
    }
    setPrompt(`Write me a starwars story about, make the hero ${hero}, make the sidekick ${sidekick}, the villain ${villain}, the setting ${setting}, and the hero starship ${heroStarship} and villain ${villainStarship}`);
  }, [hero, sidekick, villain, setting, villainStarship, heroStarship]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      try {
          console.log(prompt);
          const result = await axios.post('http://localhost:8000/api/generate', {
              prompt: prompt,
              maxTokens: 4000,
              temperature: 0.5,
          });
          console.log(result.data);
          dispatch(setCompletedStory(result.data));
          navigate('/story');
        } catch (e) {
          dispatch(setCompletedStory("Something is going wrong, Please try again."));
      }
      setLoading(false);
  };

  return (
    <div>
      {storyComplete ? (
        <div>
          <form onSubmit={handleSubmit}>
            {/* <label htmlFor="adventure">Adventure:</label>
            <input id="adventure" type="text" value={adventure} />
   */}
            <div>
              <label htmlFor="hero">Hero:</label>
              <input id="hero" type="text" value={hero} />
            </div>
            <div>
              <label htmlFor="sidekick">Sidekick:</label>
              <input id="sidekick" type="text" value={sidekick} />
            </div>
            <div>
              <label htmlFor="villain">Villain:</label>
              <input id="villain" type="text" value={villain} />
            </div>
            <div>
              <label htmlFor="setting">Setting:</label>
              <input id="setting" type="text" value={setting} />
            </div>
            <div>
              <label htmlFor="heroStarship">Hero's Starship:</label>
              <input id="heroStarship" type="text" value={heroStarship} />
            </div>
            <div>
              <label htmlFor="villainStarship">Villain's Starship:</label>
              <input id="villainStarship" type="text" value={villainStarship} />
            </div>
            
            <button
              disabled={prompt.length === 0}
              type="submit"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </form>
        </div>
      ) : (
        <p>Select a Hero, Sidekick, villain, setting, and adventure to begin.</p>
      )}
    </div>
  );
  
};

export default Generator;

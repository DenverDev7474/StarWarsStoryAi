import React, { useEffect, useState } from 'react';
import { useAppDispatch, RootState } from '../../store';
import { useSelector } from 'react-redux';
import axios from 'axios';  // Make sure to install axios

function Generator() {
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [storyComplete, setStoryComplete] = useState(false); // New state variable


  // const dispatch  = useAppDispatch();
  const story = useSelector((state: RootState) => state.generator);


  const { adventure, hero, sidekick, villain, setting, villainStarship, heroStarship } = story;

  useEffect(() => {
    setPrompt(`Write me a starwars story about  ${adventure}, make the hero ${hero}, make the sidekick ${sidekick}, the villain ${villain}, the setting ${setting}, and the hero starship ${heroStarship} and villain ${villainStarship}`);
  }, [adventure, hero, sidekick, villain, setting, villainStarship, heroStarship]);
  

  const testPrompt = `Write me a starwars story about  gun, make the hero police, make the sidekick friedn, the villain bad ma, the setting nyc, and the hero starship car and villain liborguine`;



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      try {
          const result = await axios.post('http://localhost:8000/api/generate', {
              prompt: testPrompt,
              maxTokens: 4000,
              temperature: 0.5,
          });

          setApiResponse(result.data);
      } catch (e) {
          setApiResponse("Something is going wrong, Please try again.");
      }
      setLoading(false);
  };

  //dispatch(/* Your action to update the adventure */)


  

  return (
    <div>
      {storyComplete ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="adventure">Adventure:</label>
            <input id="adventure" type="text" value={adventure} />
  
            <label htmlFor="hero">Hero:</label>
            <input id="hero" type="text" value={hero} />
  
            <label htmlFor="sidekick">Sidekick:</label>
            <input id="sidekick" type="text" value={sidekick} />
  
            <label htmlFor="villain">Villain:</label>
            <input id="villain" type="text" value={villain} />
  
            <label htmlFor="setting">Setting:</label>
            <input id="setting" type="text" value={setting} />
  
            <label htmlFor="heroStarship">Hero's Starship:</label>
            <input id="heroStarship" type="text" value={heroStarship} />
  
            <label htmlFor="villainStarship">Villain's Starship:</label>
            <input id="villainStarship" type="text" value={villainStarship} />
  
            <button
              disabled={prompt.length === 0}
              type="submit"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </form>
          {apiResponse && (
            <div>
              <pre>
                <strong>Generated Story:</strong>
                {apiResponse}
              </pre>
            </div>
          )}
        </div>
      ) : (
        <p>Select a Hero, Sidekick, villain, setting, and adventure to begin.</p>
      )}
    </div>
  );
  
};

export default Generator;

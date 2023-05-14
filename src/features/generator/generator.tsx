import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store';

const { Configuration, OpenAIApi } = require("openai");


function Generator() {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);


  const dispatch = useAppDispatch();

  const adventure = "A story about man vs. time."
  const hero = "Luke Skywalker"
  const villain = "Darth Vader"
  const setting = "Tatooine"
  const starship = "Millennium Falcon"
  const starship2 = "Death Star"



   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        temperature: 0.5,
        max_tokens: 4000,
      });
      //console.log("response", result.data.choices[0].text);
      setApiResponse(result.data.choices[0].text);
    } catch (e) {
      //console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
  };


  useEffect(() => {
    setPrompt(`Write me a starwars story about  ${adventure}, make the hero ${hero}, the villain ${villain}, the setting ${setting}, and the hero starship ${starship} and villain ${starship2}`)
  }, [dispatch]);

  

  return (
    <div>
            <div>
              <form onSubmit={handleSubmit}>
                <button
                  disabled={prompt.length === 0}
                  type="submit"
                >
                  {loading ? "Generating..." : "Generate"}
                </button>
              </form>
            </div>
            {apiResponse && (
              <div>
                <pre>
                  <strong>Generated Story:</strong>
                  {apiResponse}
                </pre>
              </div>
            )}
    </div>  
  );
};

export default Generator;

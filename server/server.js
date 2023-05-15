const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

const app = express();
app.use(cors());

console.log(process.env.REACT_APP_OPENAI_API_KEY);

const openai = new OpenAIApi(configuration);

app.post("/api/generate", express.json(), async (req, res) => {
  const { prompt, maxTokens, temperature } = req.body;
  try {
    const result = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: temperature,
      max_tokens: maxTokens,
    });
    res.json(result.data.choices[0].text);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(8000, () => console.log("Server running on port 8000"));

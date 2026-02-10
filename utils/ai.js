const axios = require('axios');

async function callGeminiAI(question, apiKey) {
  try {
    if (!apiKey) {
      throw new Error('API key missing');
    }

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        contents: [
          {
            parts: [
              {
                text: `Answer this in one word: ${question}`
              }
            ]
          }
        ]
      },
      { timeout: 5000 }
    );

    const result = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!result) {
      return 'Unable';
    }

    return result.trim().split(/\s+/)[0];

  } catch (error) {
    console.error('AI call failed:', error.message);
    return 'Error';
  }
}

module.exports = {
  callGeminiAI
};

import express from 'express';
import openAI from './openAI.js';

const server = express();
server.use(express.json());

server.post('/ingredients', async (req, res) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`Request to /ingredients received: ${req.body.message}`);
  }
  if (typeof req.body.message === 'undefined' || !req.body.message.length) {
    res
      .status(400)
      .json({ error: 'No ingredients provided in "message" key of payload.' });
    return;
  }
  try {
    const completionResponse = await openAI.send(req.body.message);
    res.json(completionResponse.function_call);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default server;

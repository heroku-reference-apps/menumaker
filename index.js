import 'dotenv/config';
import express from 'express';
import server from './src/server/index.js';

server.use(express.static('./public'));
server.use(express.static('./dist'));

const PORT = process.env.PORT || 3000;

server.listen(PORT, '::', () => {
  console.log(`Server is running on port ${PORT}`);
});

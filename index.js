"use strict";
import express from 'express';
import http from 'node:http';
import path from 'node:path';
import cors from 'cors';

const __dirname = process.cwd();
const server = http.createServer();
const app = express(server);
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

server.on('request', (req, res) => {
  app(req, res);
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(res.sendFile(`${__dirname}/main_page/index.html`));
});

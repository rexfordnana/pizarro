import express from 'express';
import { childLogger } from './lib/logger.js';

const app = express();
const port = 3000;
const logger = childLogger();
const dummyData = [{ budget: ['cake', 'salt'] }];

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  logger.info({ dummyData }, 'sending dummyData');
  logger.info({ req }, 'logging req');
  res.send(dummyData);
});
app.listen(port, () => {
  logger.info({ port }, `listening on port ${port}`);
});

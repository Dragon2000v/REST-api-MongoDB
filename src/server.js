import express from 'express';
import cors from 'cors';
import env from './utils/env.js';

import songsRouter from './routers/songs-router.js';

import logger from './middlewares/logger.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import errorHandler from './middlewares/errorHandler.js';

const startServer = () => {
  const port = Number(env('PORT', 3000));
  const app = express();

  app.use(cors());
  app.use(logger);

  app.use('/api/songs', songsRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(port, () => console.log(`Server running on ${port} PORT`));
};

export default startServer;

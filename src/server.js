import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

import env from './utils/env.js';
import { getSongs, getSongById } from './services/song-services.js';

const startServer = () => {
  const port = Number(env('PORT', 3000));
  const app = express();

  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(cors());
  app.use(logger);

  app.get('/api/songs', async (req, res) => {
    const data = await getSongs();
    res.status(200).json({
      status: 200,
      message: 'Songs get successfully',
      data,
    });
  });

  app.get('/api/songs/:id', async (req, res) => {
    const { id } = req.params;
    const data = await getSongById(id);

    if (!data) {
      return res.status(404).json({
        status: 404,
        message: `Song with id=${id} not found`,
        data: {
          message: `Song with id=${id} not found`,
        },
      });
    }

    res.status(200).json({
      status: 200,
      message: `Song with id=${id} get successfully`,
      data,
    });
  });

  app.use((req, res) => {
    res.status(404).json({
      message: `${req.url} Not Found`,
    });
  });

  // eslint-disable-next-line no-unused-vars
  app.use((error, req, res, next) => {
    res.status(500).json({
      message: 'Server error',
    });
  });

  app.listen(port, () => console.log(`Server running on ${port} PORT`));
};

export default startServer;

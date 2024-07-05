import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

const startServer = () => {
  const port = Number(3000);
  const app = express();

  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(cors());
  app.use(logger);

  app.get('/api/songs', async (req, res) => {});

  app.get('/api/songs/:id', async (req, res) => {});

  app.use((req, res) => {
    res.status(404).json({
      message: `${req.url} Not Found`,
    });
  });

  app.use((error, req, res, next) => {
    res.status(500).json({
      message: 'Server error',
    });
  });

  app.listen(port, () => console.log(`Server running on ${port} PORT`));
};

export default startServer;

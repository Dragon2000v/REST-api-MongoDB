import { Router } from 'express';
import songsControllers from '../controllers/songs-controllers.js';

const songsRouter = Router();

songsRouter.get('/', songsControllers.getSongsController);
songsRouter.get('/:id', songsControllers.getSongByIdController);

export default songsRouter;

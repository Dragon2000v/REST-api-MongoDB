import { Router } from 'express';
import songsControllers from '../controllers/songs-controllers.js';

import isValidId from '../middlewares/isValidid.js';

const songsRouter = Router();

songsRouter.get('/', songsControllers.getSongsController);
songsRouter.get('/:id', isValidId, songsControllers.getSongByIdController);
songsRouter.post('/', songsControllers.addSongController);
export default songsRouter;

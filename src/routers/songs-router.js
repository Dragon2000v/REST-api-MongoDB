import { Router } from 'express';
import songsControllers from '../controllers/songs-controllers.js';

import isValidid from '../middlewares/isValidid.js';

const songsRouter = Router();

songsRouter.get('/', songsControllers.getSongsController);
songsRouter.get('/:id', isValidid, songsControllers.getSongByIdController);
songsRouter.post('/', songsControllers.addSongController);
export default songsRouter;

import { Router } from 'express';
import songsControllers from '../controllers/songs-controllers.js';

import isValidId from '../middlewares/isValidId.js';
import validateBody from '../decorators/validateBody.js';
import { songAddSchema } from '../validation/song-schemas.js';

const songsRouter = Router();

songsRouter.get('/', songsControllers.getSongsController);
songsRouter.get('/:id', isValidId, songsControllers.getSongByIdController);
songsRouter.post(
  '/',
  validateBody(songAddSchema),
  songsControllers.addSongController
);
export default songsRouter;

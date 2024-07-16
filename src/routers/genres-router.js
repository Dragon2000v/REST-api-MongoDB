import { Router } from 'express';

import genresControllers from '../controllers/genres-controllers.js';
import isValidId from '../middlewares/isValidId.js';
import isEmptyBody from '../middlewares/isEmptyBody.js';
import validateBody from '../decorators/validateBody.js';
import {
  genreAddSchema,
  genreUpdateSchema,
} from '../validation/genre-schemas.js';

const genresRouter = Router();

genresRouter.get('/', genresControllers.getGenres);
genresRouter.post(
  '/',
  isEmptyBody,
  validateBody(genreAddSchema),
  genresControllers.addGenre
);
genresRouter.put('/:id', isValidId, validateBody(genreUpdateSchema));

export default genresRouter;

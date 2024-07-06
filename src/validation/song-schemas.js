import Joi from 'joi';
import { genreList, releaseYearRegexp } from '../constants/song-constants.js';

export const songAddSchema = Joi.object({
  author: Joi.string().required(),
  name: Joi.string().required(),
  favorite: Joi.string().required(),
  genre: Joi.string()
    .valid(...genreList)
    .required(),
  releaseYear: Joi.string().pattern(releaseYearRegexp).required(),
});

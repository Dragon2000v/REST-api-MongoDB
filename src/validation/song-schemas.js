import Joi from 'joi';
import { genreList, releaseYearRegexp } from '../constants/song-constants.js';

export const songAddSchema = Joi.object({
  author: Joi.string()
    .required()
    .messages({ 'any.required': 'Author must be provided' }),
  name: Joi.string().required(),
  favorite: Joi.string().required(),
  genre: Joi.string()
    .valid(...genreList)
    .required(),
  releaseYear: Joi.string().pattern(new RegExp(releaseYearRegexp)).required(),
});

export const songUpdateSchema = Joi.object({
  author: Joi.string(),
  name: Joi.string(),
  favorite: Joi.string(),
  genre: Joi.string().valid(...genreList),
  releaseYear: Joi.string().pattern(new RegExp(releaseYearRegexp)),
});

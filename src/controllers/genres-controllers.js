import * as genresServices from '../services/genre-services.js';
import HttpError from '../utils/HttpError.js';
import ctrlWrapper from '../decorators/ctrlWrapper.js';

const getGenres = async (req, res) => {
  const data = await genresServices.getGenre();

  res.status(200).json({
    status: 200,
    message: 'Genres find successfully',
    data,
  });
};

const addGenre = async (req, res) => {
  const { title } = req.body;
  const genre = await genresServices.findGenre({ title });
  if (genre) {
    throw HttpError(409, `Genre ${title} already exist`);
  }
  const data = await genresServices.addGenre(req.body);
  res.status(201).json({
    status: 201,
    message: 'genre add successfully',
    data,
  });
};

export default {
  getGenres: ctrlWrapper(getGenres),
  addGenre: ctrlWrapper(addGenre),
};

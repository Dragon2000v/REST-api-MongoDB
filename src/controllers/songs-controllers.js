import * as songServices from '../services/song-services.js';
import HttpError from '../utils/HttpError.js';
import ctrlWrapper from '../decorators/ctrlWrapper.js';

const getSongsController = async (req, res) => {
  const data = await songServices.getSongs();

  res.status(200).json({
    status: 200,
    message: 'Songs get successfully',
    data,
  });
};

const getSongByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await songServices.getSongById(id);

  if (!data) {
    throw HttpError(404, `Song with id=${id} not found`);
  }

  res.status(200).json({
    status: 200,
    message: `Song with id=${id} get successfully`,
    data,
  });
};

const addSongController = async (req, res) => {
  const data = await songServices.addSong(req.body);
  res.status(201).json({
    status: 201,
    message: `Song add successfully`,
    data,
  });
};

export default {
  getSongsController: ctrlWrapper(getSongsController),
  getSongByIdController: ctrlWrapper(getSongByIdController),
  addSongController: ctrlWrapper(addSongController),
};

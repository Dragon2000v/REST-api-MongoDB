import * as songServices from '../services/song-services.js';

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
    return res.status(404).json({
      status: 404,
      message: `Song with id=${id} not found`,
      data: {
        message: `Song with id=${id} not found`,
      },
    });
  }

  res.status(200).json({
    status: 200,
    message: `Song with id=${id} get successfully`,
    data,
  });
};

export default {
  getSongsController,
  getSongByIdController,
};

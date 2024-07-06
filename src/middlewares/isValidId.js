import { isValidObjectId } from 'mongoose';
import HttpError from '../utils/HttpError.js';

const isValidid = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return next(HttpError(404, `${id} not valid id`));
  }
  next();
};

export default isValidid;

import { Schema, model } from 'mongoose';
import { mongoSaveError, setMongoUpdateSettings } from './hooks.js';

const genreSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

genreSchema.post('save', mongoSaveError);
genreSchema.pre('findOneAndUpdate', setMongoUpdateSettings);
genreSchema.pre('findOneAndUpdate', mongoSaveError);

const Genre = model('genre', genreSchema);

export default Genre;

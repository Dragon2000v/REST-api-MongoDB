import { Schema, model } from 'mongoose';
import { mongoSaveError } from './hooks.js';

const songSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

songSchema.post('save', mongoSaveError);

const Song = model('song', songSchema);

export default Song;

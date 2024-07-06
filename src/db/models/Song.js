import { Schema, model } from 'mongoose';
import { mongoSaveError } from './hooks.js';

const songSchema = new Schema(
  {
    author: {
      type: String,
      required: [true, 'Author must bu exist'],
    },
    name: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
      required: true,
    },
    genre: {
      type: String,
      enum: ['pop', 'rock'],
      required: true,
    },
    releaseYear: {
      type: String,
      match: /^\d{4}$/,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

songSchema.post('save', mongoSaveError);

const Song = model('song', songSchema);

export default Song;

import Genre from '../db/models/Genre.js';

export const getGenre = () => Genre.find();

export const findGenre = filter => Genre.findOne(filter);

export const addGenre = data => Genre.create(data);

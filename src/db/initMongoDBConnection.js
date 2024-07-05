import mongoose from 'mongoose';
// import { DB_HOST } from '../../config.js';

const { DB_HOST } = process.env;

const initMongoDBConnection = async () => {
  try {
    await mongoose.connect(DB_HOST);
    console.log('Successfully connection to MongoDB');
  } catch (error) {
    console.log(`Connection error ${error.mongoose}`);
    throw error;
  }
};

export default initMongoDBConnection;

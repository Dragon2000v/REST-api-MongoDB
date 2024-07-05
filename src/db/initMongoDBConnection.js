import mongoose from 'mongoose';
import 'dotenv/config';
import env from '../utils/env.js';

const initMongoDBConnection = async () => {
  try {
    const user = env('MONGODB_USER');
    const password = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const name = env('MONGODB_NAME');
    const DB_HOST = `mongodb+srv://${user}:${password}@${url}/${name}?retryWrites=true&w=majority&appName=DragonData`;
    await mongoose.connect(DB_HOST);
    console.log('Successfully connection to MongoDB');
  } catch (error) {
    console.log(`Connection error ${error.mongoose}`);
    throw error;
  }
};

export default initMongoDBConnection;

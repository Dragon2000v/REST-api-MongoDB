import mongoose from 'mongoose';

const initMongoDBConnection = async () => {
  try {
    const DB_HOST =
      'mongodb+srv://Dragon2000v:GJtPWoEK43hLZRHQ@dragondata.po0zxba.mongodb.net/my-songs?retryWrites=true&w=majority&appName=DragonData';
    await mongoose.connect(DB_HOST);
    console.log('Successfully connection to MongoDB');
  } catch (error) {
    console.log(`Connection error ${error.mongoose}`);
    throw error;
  }
};

export default initMongoDBConnection;

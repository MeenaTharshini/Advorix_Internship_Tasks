const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB Connected Successfully');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
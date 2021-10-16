const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');

const Tour = require('../../model/tourModel');

dotenv.config({ path: './config.env' });

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful');
  });

// load JSON
const tours = fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8');

// import data to DB
const importData = async () => {
  try {
    await Tour.create(JSON.parse(tours));
    console.log('Data loaded');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// DELETE DATA FROM DB
const deleteData = async () => {
  try {
    // delete all data from collection Tour
    await Tour.deleteMany();
    console.log('Data deleted');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

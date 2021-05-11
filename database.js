var mongoose = require('mongoose');

const connect = async () => {
  try {
    return await mongoose.connect(
      `${process.env.MONGODB_URL}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
      },
      (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Database connected');
        }
      }
    );
  } catch (err) {
    console.log(err);
    return;
  }
};
module.exports = {
  connect: connect,
};

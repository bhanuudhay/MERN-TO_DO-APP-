const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://yOURNAME:PASS@nodeexpressprojects.ak8pi.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProjects ";

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;

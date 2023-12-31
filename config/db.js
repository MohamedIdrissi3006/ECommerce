const mongoose = require("mongoose");




const connectDB = async () => {
    try {
      const connec = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
      });
  
      console.log(`MongoDB Connected: ${connec.connection.host}`);
    } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit();
    }
  };

  module.exports = connectDB;
import mongoose from "mongoose";

export const connectDB = async () => {
  const URL = "mongodb+srv://admin:admin@ecomm.sihk8cs.mongodb.net/";
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Databse connected successfully");
  } catch (error) {
    console.log("Error while connecting databse", error.message);
  }
};

export default connectDB;

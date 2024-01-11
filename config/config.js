import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://mdmdsar:D05MLV3yWJqzc47o@gtask.iloxw1j.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("db connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connectDB;

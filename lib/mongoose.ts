import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.NEXT_PUBLIC_MONGODB) {
    return console.log("MISSING MONGODB_URL");
  }

  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB, {
      dbName: "aicards",
    });

    isConnected = true;

    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDB connection failed", error);
  }
};

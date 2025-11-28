import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Xumoyun:mee_youukh1809x@cluster0.iksbd24.mongodb.net/food-delivery"
    )
    .then(() => {
        console.log("DB connected");
        
    });
};

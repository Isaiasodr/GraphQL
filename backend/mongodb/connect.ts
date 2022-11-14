import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_API as string)
  .then(() => console.log("mongo conectado"))
  .catch((error) => console.log(error));

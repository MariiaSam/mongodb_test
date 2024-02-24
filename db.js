import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI)
  .then(() => console.log("Database connect"))
  .catch((error) => {
    console.error("Database Fault", error);
    process.exit(1)

  });
  
import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI)
  .then(() => console.log("Database connect, Ура, ми підключились"))
  .catch((error) => {
    console.error("Database Fault, заспокойся, не нервуй, все не так погано, як ти думаєш", error);
    process.exit(1)

  });
  
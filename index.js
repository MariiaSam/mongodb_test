import express from "express";

import routes from "./routes/index.js";

const app = express();

app.use("/api", routes);

app.use((req, res, next) => {
  res.status(404).send("not found");
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send("Server Error");
});

app.listen(8080, () => {
  console.log("Server 8080");
});

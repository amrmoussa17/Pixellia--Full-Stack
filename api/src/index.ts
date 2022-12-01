import express from "express";
import routes from "./routes/index";
import cors from "cors";

// make an app instance
const app = express();
app.use(cors());

// configure app routes
app.use("/", routes);

// configure port
const port = 8080;

// spin up server
app.listen(port, () => {
  console.log(`server started at port ${port}`);
});

export default app;

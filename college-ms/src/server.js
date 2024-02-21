import cors from "cors";
import express from "express";
import studentController from "./controllers/studentController.js";
import departmentController from "./controllers/departmentController.js.js";

const app = express();
const port = 8080;

app.use(cors());
app.set("port", port);
app.use(express.json());

// app.post("/hello", (req, res) => {
//   console.log(req.body);s
//   res.send("Hello, world!");
// });

app.use("/api/students", studentController);
app.use("/api/department", departmentController);

app.listen(port, () => {
  console.log(`REST API application is running on port ${port}.`);
});

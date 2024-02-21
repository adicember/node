import cors from "cors";
import express from "express";
import studentController from "./controllers/studentController.js";
import connectToMongoDB from "./config/db.js";
import taskController from "./controllers/tasksController.js";
const app = express();
const port = 8080;

app.use(cors());
app.set("port", port);
app.use(express.json());

connectToMongoDB();

// app.get("/hello", (req, res) => {
//   res.send("Hello, world!");
// });

app.get("/json", (req, res) => {
  res.status(200).json({ data: "Hello world!" });
});

app.get("/student", (req, res) => {
  res.status(200).json({ name: "aditika", age: 22 });
});

app.use("/api/students", studentController);
app.use("/api/tasks", taskController);

app.use("/api/students", studentController);
app.listen(port, () => {
  console.log(`REST API application is running on port ${port}.`);
});

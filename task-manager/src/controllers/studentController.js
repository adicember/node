import { Router } from "express";

const studentController = Router();

const studentList = [
  {
    name: "John",
    age: 34,
  },
  {
    name: "Sarah",
    age: 24,
  },
  {
    name: "Mary",
    age: 30,
  },
];

studentController.get("/list", (req, res) => {
  res.status(200).json({
    students: studentList,
  });
});

studentController.post("/create", (req, res) => {
  const student = req.body;

  console.log("name: ", student.name, "age: ", student.age);

  res.status(200).json({
    message: "Student created!!!",
  });
});

export default studentController;

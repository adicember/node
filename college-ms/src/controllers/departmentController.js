import { Router } from "express";

const departmentController = Router();

const nameList = [
  {
    name: "Aditika",
    age: 22,
  },
  {
    name: "Smriti",
    age: 21,
  },
  {
    name: "Jenny",
    age: 21,
  },
];

departmentController.get("/nameList", (req, res) => {
  res.status(200).json({
    studentName: nameList,
  });
});

departmentController.post("/createList", (req, res) => {
  const { name, age } = req.body;
  console.log(name, age);
  // console.log("name: ", name, "age: ", age);

  res.status(200).json({
    message: "Student created!!!",
  });
});

departmentController.get("/batchList"), (req, res) => {
    
}




export default studentController;

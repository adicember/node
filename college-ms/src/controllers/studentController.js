import { Router } from "express";

const studentController = Router();

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

studentController.get("/nameList", (req, res) => {
  res.status(200).json({
    studentName: nameList,
  });
});

studentController.post("/createList", (req, res) => {
  const { name, age } = req.body;
  console.log(name, age);
  // console.log("name: ", name, "age: ", age);

  res.status(200).json({
    message: "Student created!!!",
  });
});

studentController.get("/batchList"), (req, res) => {
    
}




export default studentController;

import { Router } from "express";

const departmentController = Router();

const deptList = [
  {
    name: "CSIT",
    student: 22,
  },
  {
    name: "BIM",
    student: 21,
  },
  {
    name: "BCA",
    student: 21,
  },
];

departmentController.get("/deptList", (req, res) => {
  res.status(200).json({
    deptName: deptList,
  });
});

departmentController.post("/List", (req, res) => {
  const { name, student } = req.body;
  console.log(name, student);
  // console.log("name: ", name, "age: ", age);

  res.status(200).json({
    message: "Student created!!!",
  });
});



export default studentController;

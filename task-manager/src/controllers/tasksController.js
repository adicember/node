import { Router } from "express";
import Task from "../models/task.js";

const taskController = Router();

taskController.post("/create", async (req, res) => {
  const data = req.body;

  const task = new Task({
    title: data.title,
    description: data.description,
  });

  try {
    await task.save();
    console.log("Task created.");

    res.status(200).json({
      message: "Task created!",
    });
  } catch (err) {
    console.error("Task not created.", err);

    res.status(500).json({
      message: "Task is not created!",
    });
  }
});

taskController.get("/list", async (req, res) => {
  try {
    const tasks = await Task.find({ isDeleted: false }).sort({ createdAt: -1 });

    res.status(200).json({
      tasks,
    });
  } catch (err) {
    console.error("task fetching failed: ", err);

    res.status(500).json({
      message: "Error fetching tasks",
    });
  }
});

//delete
taskController.delete("/remove/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Task.updateOne({ _id: id }, { $set: { isDeleted: true } });
    res.status(200).json({ message: "Task deleted with id " + id });
  } catch (err) {
    console.error("An error occurred while deleting the task: ", err);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the task." });
  }
});

//update
taskController.get("/complete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Task.updateOne({ _id: id }, { $set: { isCompleted: true } });
    res.status(200).json({ message: "Task completed with id " + id });
  } catch (err) {
    console.error("An error occurred while completing the task: ", err);
    res
      .status(500)
      .json({ error: "An error occurred while completing the task." });
  }
});

export default taskController;

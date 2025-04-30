import { Router } from "express";
import { createUser, loginUser } from "../controllers/users.controller.js";
import {
    deleteTasks,
    getTasks,
    postTasks,
    putTasks,
} from "../controllers/tasks.controller.js";


const router = Router();

router.post("/auth/register", createUser);

router.post("/auth/login", loginUser);


router.get("/tasks", getTasks);

router.post("/tasks", postTasks);

router.put("/tasks/:id", putTasks);

router.delete("/tasks/:id", deleteTasks);

export default router;

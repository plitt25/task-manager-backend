import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM tasks");
  if (rows.length === 0) {
    return res.status(404).json({ msg: "no existen tareas" });
  }
  res.json(rows);

  res.send("se obtine las tareas");
};

export const postTasks = async (req, res) => {
  const dataTask = req.body;
  const { rows } = await pool.query(
    "INSERT INTO tasks (title, description, status, user_id) VALUES ($1, $2, $3, $4)",
    [dataTask.title, dataTask.description, dataTask.status, dataTask.userId]
  );
  return res.json(rows[0]);
};

export const putTasks = async (req, res) => {
  const { id } = req.params;
  const dataTask = req.body;
  const { rows } = await pool.query(
    "UPDATE tasks set title = $1, description = $2, status = $3 WHERE id = $4",
    [dataTask.title, dataTask.description, dataTask.status, id]
  );
  return res.json({ msg: "Tarea Actualizada" });
};

export const deleteTasks = async (req, res) => {
  const { id } = req.params;
  const rowCount = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
  if (rowCount === 0) {
    return res.status(404).json({ msg: "no existen la tarea a eliminar" });
  }
  return res.json({ msg: "Tarea eliminada" });
};

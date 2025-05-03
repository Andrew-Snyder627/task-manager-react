import "./App.css";
import Tasks from "../Tasks/Tasks";
import Form from "../Form/Form";
import { useState, useEffect } from "react";
import { getTasks, postTask, deleteTask } from "../../apiCalls/apiCalls";


function App() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");

  // Fetch tasks when component mounts
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const responseData = await getTasks();
        setTasks(responseData);
        setError("");
      } catch (error) {
        setError("Unable to fetch tasks.");
      }
    };

    fetchTasks();
  }, []);

  // Add a new task
  async function addTask(newTask) {
    try {
      const data = await postTask(newTask);
      setTasks([...tasks, data]);
      setError("");
    } catch (error) {
      setError("Unable to create task.");
    }
  }

  // Delete a task
  async function deleteTaskById(id) {
    try {
      await deleteTask(id);
      const filteredTasks = tasks.filter((task) => task.id !== id);
      setTasks(filteredTasks);
      setError("");
    } catch (error) {
      setError("Unable to delete task.");
    }
  }

  return (
    <main className="App">
      <h1>Task Manager</h1>
      {error && <h2 className="error-msg">{error}</h2>}
      {!tasks.length && <h2>No tasks yet -- add some!</h2>}
      <Form addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTaskById} />
    </main>
  );
}

export default App;
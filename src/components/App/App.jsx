import { useState } from "react";
import "./App.css";
import Tasks from "../Tasks/Tasks";
import Form from "../Form/Form";

function App() {
  const dummyTasks = [
    {
      id: 1,
      title: "Prank Travis",
      description: "Stick googly eyes on all his stuff"
    },
    {
      id: 2,
      title: "Make a secret password app",
      description: "So you and your rideshare driver can both know neither one of you is lying",
    },
    {
      id: 3,
      title: "Learn a martial art",
      description: "To exact vengeance upon my enemies"
    },
  ]

  const [tasks, setTasks] = useState([dummyTasks]);

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    console.log(id);
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  return (
    <main className="App">
      <h1>Task Manager</h1>
      {!tasks.length && <h2>No tasks yet -- add some!</h2>}
      <Form addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </main>
  );
}

export default App;
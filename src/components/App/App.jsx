import { useState } from "react";
import "./App.css";
import Tasks from "../Tasks/Tasks";

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

  const [tasks, setTasks] = useState(dummyTasks);

  return (
    <main className="App">
      <h1>Task Manager</h1>
      <p>Hi!</p>
      <Tasks tasks={tasks} />
    </main>
  );
}

export default App;
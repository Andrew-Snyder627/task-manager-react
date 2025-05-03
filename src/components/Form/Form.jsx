import { useState } from "react";
import "./Form.css";

function Form({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function submitTasks(event) {
    event.preventDefault();

    const newTask = {
      title,
      description,
    };

    addTask(newTask);
    clearInput();
  }

  function clearInput() {
    setTitle("")
    setDescription("");
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button onClick={(event) => submitTasks(event)}>SUBMIT</button>
    </form>
  );
}

export default Form;
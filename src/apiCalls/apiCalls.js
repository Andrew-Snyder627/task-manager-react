const baseEndpoint = "http://localhost:3000/api/v1/tasks";

async function getTasks() {
  const response = await fetch(baseEndpoint);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

async function postTask(newTask) {
  const response = await fetch(baseEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

async function deleteTask(id) {
  const response = await fetch(`${baseEndpoint}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

export { getTasks, postTask, deleteTask };
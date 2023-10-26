import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const API_URL = "http://localhost:5000/";
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    refreshTasks();
  }, []);

  const refreshTasks = async () => {
    try {
      const response = await fetch(API_URL + "api/todoapp/GetTasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks: ", error);
    }
  };

  const addClick = async () => {
    try {
      const newTasks = document.getElementById("newTasks").value;
      const formData = new FormData();
      formData.append("newTasks", newTasks);

      const response = await fetch(API_URL + "api/todoapp/AddTasks", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      alert(result);
      refreshTasks();
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  

  return (
    <div className="App">
      <h2>Todo App</h2>
      <input id="newTasks" />&nbsp;
      <button onClick={addClick}>Add Tasks</button>
      {tasks.map((task) => (
        <p key={task.id}>
          <b>* {task.description}</b>&nbsp;
         
        </p>
      ))}
    </div>
  );
};

export default App;

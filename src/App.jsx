import { useEffect, useState } from "react";
import AddTasks from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";
/* eslint-disable react/prop-types */

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [] );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
// FUTURA.ATUALIZAÇÃO DE API COM O BANCO  ---------------------------------------
  useEffect(() => {
    const fetchTasks = async () => {
      // Chama a API
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
     // pega os dados 
      const data = await response.json();
      // armezena no state
      // setTasks(data);
    }
    fetchTasks();
  }, []);
  // --------------------------------------------------------------------
  function onTaskClick(taskId) {
    // Atualiza o estado das tarefas
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      // nao precisou atualizar
      return task;
    });
    setTasks(newTasks);
  }
  function onDeleteTaskClick(taskId) {
    // Atualiza o estado das tarefas deletadas
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    // Atualiza o estado das tarefas adicionadas
    const newTask = {
      id: v4  (),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
// HTML
  return (
    <div className=" w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          lembretes
        </h1>
        <AddTasks setTasks={setTasks}  onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;

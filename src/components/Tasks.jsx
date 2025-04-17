import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Tasks(props) {
  const navigate = useNavigate();
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set('title', task.title);
    query.set('description', task.description);
    navigate(`/detalhes?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={` p-2 rounded-md text-left bg-slate-400 flex items-center gap-2 text-white text-left w-full rounded-md ${
              task.isCompleted && 'line-through '
            }`}
          >
            {task.isCompleted && <CheckIcon/>}
            {task.title}
          </button>
          <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white">
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;

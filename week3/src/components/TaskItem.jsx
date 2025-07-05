import React from 'react';
import Button from './ui/button';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="h-5 w-5 text-blue-600 rounded"
        />
        <span 
          className={task.completed 
            ? 'line-through text-gray-500 dark:text-gray-400' 
            : 'text-gray-900 dark:text-white'
          }
        >
          {task.text}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {new Date(task.createdAt).toLocaleDateString()}
        </span>
        <Button variant="danger" size="sm" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </div>
    </li>
  );
};

export default TaskItem;
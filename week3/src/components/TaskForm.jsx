import React, { useState } from 'react';
import Button from './ui/button';

const TaskForm = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;
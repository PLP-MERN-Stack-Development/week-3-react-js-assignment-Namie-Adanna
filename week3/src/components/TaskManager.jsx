import React, { useState } from 'react';
import { useLocalStorageTasks } from '../hooks/useLocalStorage';
import Button from './ui/button';
import Card from './ui/card';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask, clearCompleted } = useLocalStorageTasks();
  const [filter, setFilter] = useState('all');

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    active: tasks.filter(t => !t.completed).length
  };

  return (
    <section id="tasks" className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Task Manager</h2>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.total}</div>
                <div className="text-sm text-blue-600 dark:text-blue-400">Total</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.completed}</div>
                <div className="text-sm text-green-600 dark:text-green-400">Completed</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{stats.active}</div>
                <div className="text-sm text-orange-600 dark:text-orange-400">Active</div>
              </div>
            </div>

            {/* Add Task Form */}
            <TaskForm onAddTask={addTask} />

            {/* Filters */}
            <div className="flex gap-2 justify-center">
              {['all', 'active', 'completed'].map(f => (
                <Button
                  key={f}
                  variant={filter === f ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setFilter(f)}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </Button>
              ))}
              {stats.completed > 0 && (
                <Button variant="danger" size="sm" onClick={clearCompleted}>
                  Clear Completed
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Task List */}
        <TaskList 
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
          filter={filter}
        />
      </div>
    </section>
  );
};

export default TaskManager;
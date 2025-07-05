import React from 'react';
import TaskItem from './TaskItem';
import Card from './ui/card';

const TaskList = ({ tasks, onToggleTask, onDeleteTask, filter }) => {
  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return (
      <Card padding="none">
        <div className="p-8 text-center text-gray-500 dark:text-gray-400">
          <div className="text-4xl mb-4">📝</div>
          <p>No {filter === 'all' ? '' : filter} tasks</p>
        </div>
      </Card>
    );
  }

  return (
    <Card padding="none">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {filteredTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggleTask}
            onDelete={onDeleteTask}
          />
        ))}
      </ul>
    </Card>
  );
};

export default TaskList;
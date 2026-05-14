import React from 'react';
import TaskCard from './TaskCard';

const COLUMN_CONFIG = {
  'todo': {
    label: 'To Do',
    color: '#9b8ec4',
    bg: '#f3f0ff',
    emoji: '📋',
  },
  'in-progress': {
    label: 'In Progress',
    color: '#f48fb1',
    bg: '#fff0f5',
    emoji: '🚀',
  },
  'done': {
    label: 'Done',
    color: '#66bb6a',
    bg: '#f0fff4',
    emoji: '✅',
  },
};

function TaskColumn({ status, tasks, onEdit, onDelete, onStatusChange }) {
  const config = COLUMN_CONFIG[status];

  return (
    <div
      className="column"
      style={{ '--col-color': config.color, '--col-bg': config.bg }}
    >
      <div className="column-header">
        <span className="column-dot" style={{ background: config.color }} />
        <span className="column-emoji">{config.emoji}</span>
        <h2 className="column-title">{config.label}</h2>
        <span className="column-count">{tasks.length}</span>
      </div>

      <div className="column-body">
        {tasks.length === 0 ? (
          <div className="empty-column">
            <span className="empty-icon">🌱</span>
            <p>No tasks here yet</p>
          </div>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEdit}
              onDelete={onDelete}
              onStatusChange={onStatusChange}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TaskColumn;

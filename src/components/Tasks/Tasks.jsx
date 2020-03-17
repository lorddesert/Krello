import React from 'react';

import { tasks } from '../../tasks/tasks.json';

const Tasks = () => {
  console.log(tasks);
  return (
    <div className="Tasks">
      <div className="Tasks-container">
        <div>
          <ul>
            {
              tasks.map((task) => (
                <li key={`task-${task.id}`}>
                  <div>
                    <h2>
                      {task.title}
                    </h2>
                  </div>
                  <div>
                    {task.description}
                  </div>
                  <div>
                    {task.priority}
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
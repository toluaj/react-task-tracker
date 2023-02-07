import React from 'react';
import { FaRegSquare, FaSquare, FaTrashAlt } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
  <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
    <input type='checkbox' className='form-control form-control-check'/>
      <h3>{task.text} 
        <FaTrashAlt style={{color: 'red', cursor: 'pointer', marginTop: '10px', position: 'absolute', right: '680'}} onClick={() => onDelete(task.id)} /> 
      </h3>
      <p>Due date: {task.day}</p>
  </div>
  )
};

export default Task;

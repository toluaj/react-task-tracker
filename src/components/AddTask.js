import { useState } from "react";

const AddTask = ({ addTask }) => {

    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()
        if(!task) {
            alert("please add task")
            return
        }
        addTask(task, date, reminder)

        setTask('')
        setDate('')
        setReminder(false)
    }


  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control date'>
            <label>Task</label>
            <input type='text' placeholder='Add task' value={task} onChange={(e) => setTask(e.target.value)}/>
            <label>Due date</label>
            <input type='date' placeholder='Add date' value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label className=''>Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>

        <input className='btn btn-block' type="submit" value="Save Task" />
    </form>
  )
};

export default AddTask;

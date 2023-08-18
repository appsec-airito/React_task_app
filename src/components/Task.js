import {FaTimes} from 'react-icons/fa'

const Task = ({taskListed,onDelete, onToggle}) => {
  //let color =  taskListed.reminder ? 'blue' :'lightblue';
  return (
    <div className={`task ${taskListed.reminder ? 'reminder': ''}`} onDoubleClick={ () => onToggle(taskListed.id)} style={{backgroundColor: `${taskListed.reminder ? 'blue' :'lightblue'}`, color: 'white', cursor: 'pointer'}}>
      <h3  key={taskListed.id}>
        Reach {taskListed.destination} <FaTimes style={{color: 'red', cursor: 'pointer'}} onClick={ () => onDelete(taskListed.id)} />
            </h3>
        <p className='task.reminder'>
        {taskListed.day}
        </p>
    </div>
  )
}

export default Task

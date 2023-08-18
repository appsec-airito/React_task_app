import Task from './Task';

const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <div>
      {tasks.map((taskListed) => (
        <Task key={taskListed.id} taskListed={taskListed} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default Tasks;

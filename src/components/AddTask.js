import { useState} from 'react';

const AddTask = ({ saveTask }) => {
  const [text, setText] = useState('');
  const [destination, setDestination] = useState('');
  const [source, setSource] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
        alert('Please add a task')
        return
    }
    if(!destination) {
        alert('Please add a destination')
        return
    }
    if(!source) {
        alert('Please add a source')
        return
    }
    if(!day) {
        alert('Please add a day')
        return
    }
    
    saveTask({ text, destination, source, day, reminder })

    setText('')
    setDestination('')
    setSource('')
    setDay('')
    setReminder(false)
    
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task' value={ text } onChange={(e) => setText(e.target.value) }/>
        </div>
      
        <div className='form-control'>
            <label>Destination</label>
            <input type='text' placeholder='Destination address' value={ destination } onChange={(e) => setDestination(e.target.value) } />
        </div>

        <div className='form-control'>
            <label>Source</label>
            <input type='text' placeholder='Source Address' value={ source } onChange={(e) => setSource(e.target.value) }/>
        </div>

        <div className='form-control'>
            <label>Day</label>
            <input type='text' placeholder='Day' value={ day } onChange={(e) => setDay(e.target.value) }/>
        </div>

        <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input type='checkbox' checked={ reminder } value={ reminder } onChange={(e) => setReminder(e.currentTarget.checked) }/>
        </div>

        <input type='submit' className='btn btn-block' value='Save Task'/>
    </form>
  )
}

export default AddTask

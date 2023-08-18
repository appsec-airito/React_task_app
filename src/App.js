import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';

// const tasksManuallyListed = [
//     {
//         id: 1,
//         destination: 'Airport naa',
//         source: 'From  home',
//         day: 'Aug 13th by 7:00 am',
//         reminder: true, 
//     },
//     {   
//         id: 2,
//         destination: 'Home Munich',
//         source: 'From saa airport',
//         day: 'Aug 13th by 12:00 pm',
//         reminder: true,

//     },
//     {
//         id: 3,
//         destination: 'Munich St. Lucy Church',
//         source: 'From Home Munich',
//         day: 'Aug 13th by 5:30 pm',
//         reminder: true,
//     },
//     {
//         id: 4,
//         destination: 'Home Munich',
//         source: 'Munich St. Lucy Church',
//         day: 'Aug 13th by 7:00 pm',
//         reminder: false,
//     }

// ]


function App() {
  const name1 = "John"
  // const name2 = "Joe"
  // const state = true
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  //Fetch Tasks from
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/TasksManuallyListed')

    const data = await res.json()

    console.log(data)

    return data
  }

  //Fetch 1 task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/TasksManuallyListed/${id}`)

    const data = await res.json()

    console.log(data)

    return data
  }



  //Delete Task
  const deleteTask = async (id) => {
    console.log('delete ', id)

    const res = await fetch(`http://localhost:5000/TasksManuallyListed/${id}`, {
      method: 'DELETE',
    }
    )

    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')

    // setTasks(tasks.filter((task) => task.id !==id))
  }

  //Toggle Task
  const toggleTask = async (id) => {
    console.log('Toggle ', id)

    const toggleRemind = await fetchTask(id)

    const updatedTask = { ...toggleRemind, reminder: !toggleRemind.reminder}


      await fetch(`http://localhost:5000/TasksManuallyListed/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });



    // // Below was the initial code- since 'headers' is misspelled as 'header' the PUT call erased the entry and caused confusion
    // const res = await fetch(`http://localhost:5000/TasksManuallyListed/${id}`, {
    //   method: 'PUT',
    //   header: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({reminder: !toggleRemind.reminder}),
    // })


    setTasks(tasks.map((task) => 
    task.id === id ? { ...task, reminder: !task.reminder } : task))

  }

  //Save Task
  const saveTask = async (newTask) => {
    console.log('Number of current tasks ',tasks.length);
    console.log(newTask)
    // const id = Math.floor(Math.random() * 10000) + 1

    // const newerTask = { id, ...newTask }
    // setTasks([ ...tasks, newerTask])

    const res = await fetch('http://localhost:5000/TasksManuallyListed', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })

    const data = await res.json()

    setTasks([...tasks, data])

  }

  const showAddForm = () => {
    console.log('Number of current tasks ',tasks.length);
    console.log('Add Task button clicked');

    setShowAddTask(!showAddTask)
  }

  return (
    // <div className="container">
    //   <h1 style={headerStyle} >Hello from React!</h1>
    //   <h2>Hello {state ? name1 : name2}</h2>
      <div className="container">
      <Header name='John' onClick={showAddForm} showAdd={showAddTask}/>
      {showAddTask? <AddTask saveTask= {saveTask }/>:''}
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleTask}
      >
      </Tasks>: 'No more task left for '+name1}
      </div>
    // </div>
  );
}

//CSS in JS
// const headerStyle = { 
//   color: 'red',
//   backgroundColor: 'black',
// }


export default App;

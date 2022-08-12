import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Apointment',
            day: '2022-12-05T14:30',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: '2022-12-06T13:30',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shooping',
            day: '2022-12-08T16:30',
            reminder: false,
        }
    ])

    const addTask = (task) => {

        const id = Math.floor(Math.random() * 10000) + 1

        const newTask = {id, ...task}

        setTasks([...tasks, newTask])

    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {
            ...task, reminder: !task.reminder
        } : task))
    }

	return (
		<div className="container">
			<Header title='Task Tracker'/>
            <AddTask onAdd={addTask}/>
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
		</div>
	);
}

export default App;
import { useState, useEffect } from 'react'
import { useHistory} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {createStyles, makeStyles} from '@material-ui/core/styles';
import CalorieInfo from "./components/CalorieInfo";
import TopBar from "./components/TopBar";
import HomeComponent from "./components/HomeComponent/home-component";
import {AddMeal, DeleteMeal, FetchMeals,EditMeal} from "./apiCalls/api-calls";


const useStyles = makeStyles((theme) => (
    createStyles({
      main: {
        display:"flex"
      }}
)))

const userId  = localStorage.getItem('cal-id')
const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
    const [name,setName] = useState()
  const [task,setTask] = useState({})
    const history = useHistory()
  const classes = useStyles();

    useEffect(()=>{
        const user = localStorage.getItem('cal-user')
        if(!user){
            alert("Session Expired")
            history.push('/')
        }
        setName(localStorage.getItem('cal-user'))
    },[name])

  useEffect(() => {
      const userId  = localStorage.getItem('cal-id')

      fetchMeals(userId)
  }, [tasks])

  // Fetch Meals
  const fetchMeals =  (userId) => {
      FetchMeals(userId).then((res)=>{
          setTasks(res)
      }).catch((e)=>console.log(e))
  }

  // Fetch Meal
  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/${id}`)
  //   const data = await res.json()
  //
  //   return data
  // }
  // Add Meal
   const addTask =  (meal) => {
       AddMeal(meal)
           .then((res)=>{
               fetchMeals(userId);console.log(res)
           })
           .catch((e)=>console.log(e))
  }
  // Delete Meal
   const deleteTask =  (mealId) => {
       DeleteMeal(mealId)
           .then((res)=>{fetchMeals(userId);console.log(res)})
           .catch((e)=>console.log(e))
  }

  // Edit Task
   const editTask =  (updatedMeal) => {
       EditMeal(updatedMeal)
           .then((res)=>{fetchMeals(userId);console.log(res)})
           .catch((e)=>console.log(e))
    setTask([])
    setShowAddTask(false)


  }

   const toggleReminder =  (meal) => {
   console.log("Toggling Disabled")
  }
   const editStart = (task) =>{
    setShowAddTask(true)
    setTask(task)
  }




  return (
      <>
      <TopBar name={name}/>
      <div className={classes.main}>
      <div className='container'>
        <Header
          onAdd={() => {setShowAddTask(!showAddTask);setTask([])}}
          showAdd={showAddTask}
        />
        <HomeComponent showAddTask = {showAddTask} task={task} tasks={tasks} addTask={addTask} deleteTask={deleteTask} editStart={editStart} editTask={editTask} toggleReminder={toggleReminder}/>
        <Footer />
      </div>
      <div className='container'>
        <CalorieInfo meals = {tasks}/>

      </div>
      </div>
        </>
  )
}

export default App


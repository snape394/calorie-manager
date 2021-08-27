import {FaEdit, FaTimes} from 'react-icons/fa'
import {createStyles, makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => (
    createStyles({
      main: {
        display:"flex"
      },
      taskGreen :{
      background: "#f4f4f4",
      margin: 5,
      padding: "10px 20px",
      cursor: "pointer",
      borderLeft: "20px solid green"
},

      taskRed :{
        background: "#f4f4f4",
        margin: 5,
        padding: "10px 20px",
        cursor: "pointer",
        borderLeft: "20px solid red"
      },
      taskHeading:{
        display: "flex",
        alignItems: "center",
  justifyContent: "space-between"
      }
    }
)))


const Task = ({ task, onDelete, onToggle, onEdit,overCalorie }) => {
  const styles = useStyles()
  return (
    <div
      className={overCalorie?styles.taskRed:styles.taskGreen}
      onDoubleClick={() => onToggle(task)}
    >
      <h3 className={styles.taskHeading}>
        Meal : {task.text}{' '}
        <br/>
        Calories : {task.calorie}{' '}
        <FaEdit
            style={{ color: 'green', cursor: 'pointer' }}
            onClick={() => onEdit(task)}
        />
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task._id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task

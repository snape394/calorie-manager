import {useEffect, useState} from 'react'

const AddTask = ({onAdd, onEdit, task}) => {

    const currentDate = (new Date()).toISOString().slice(0,-5)
    const [text, setText] = useState('')
    const [day, setDay] = useState(currentDate)
    const [calorie, setCalorie] = useState('')
    const [reminder, setReminder] = useState(true)
    const [operation, setOperation] = useState('Add')
    const [_id, setId] = useState('')
    const userId = localStorage.getItem('cal-id')

    useEffect(() => {
        if (Object.keys(task).length !== 0) {
            setOperation("Edit")
            setText(task.text)
            setDay(task.day)
            setCalorie(task.calorie)
            setId(task._id)
        } else {
            setOperation("Add")
        }
    },[task])


    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add your meal')
            return
        }
        if (!calorie) {
            alert("Please add meal calories")
            return;
        }

        if (operation === "Add") {
            onAdd({userId, text, day, calorie, reminder})
        } else {
            onEdit({userId, _id, text, day, calorie, reminder})
        }

        setText('')
        setDay(currentDate)
        setCalorie('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Meal Info</label>
                <input
                    type='text'
                    placeholder='Add Meal Info'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                    type='datetime-local'
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Calories</label>
                <input
                    type='number'
                    placeholder='Add Calories'
                    value={calorie}
                    onChange={(e) => setCalorie(e.target.value)}
                />
            </div>
            {/*<div className='form-control form-control-check' >*/}
            {/*    <label>Set Reminder</label>*/}
            {/*    <input*/}
            {/*        type='checkbox'*/}
            {/*        checked={reminder}*/}
            {/*        value={reminder}*/}
            {/*        onChange={(e) => setReminder(e.currentTarget.checked)}*/}
            {/*    />*/}
            {/*</div>*/}

            <input type='submit' value={(operation === 'Edit') ? 'Edit Meal' : 'Add Meal'} className='btn btn-block'/>
        </form>
    )
}

export default AddTask

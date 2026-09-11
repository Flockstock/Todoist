import {useState} from 'react';
function AddTask({onAddTask , onCloseForm}) {
    const [title,setTitle] = useState("");
    const [date ,setDate] = useState("");
    const [time,setTime] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        const newTask = {
            id: Date.now(),
            title,
            date,
            time,
            completed:false
        };
        onAddTask(newTask);
    }
    return(
        <div className= "form-overlay">
            <form className="Task-form">
                <button type="button" className="close-form" onClick={onCloseForm}>x</button>
                <h2>Add New Task</h2>
                <input
                    type="text"
                    placeholder="Add a title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="date"
                    placeholder="Set a date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <input
                    type="time"
                    placeholder="Set a time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <button type="button" onClick={handleSubmit}>
                    Add new Task
                </button>

            </form>
        
        </div>
    );
}
export default AddTask;
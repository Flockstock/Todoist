import TaskCard from './TaskCard';
import AddTask from './AddTask';
import tasklistBg from "../assets/tasklistbg.png";
function TaskList({currentTasks ,onOpenForm,onCloseForm, showForm , onAddTask,onCompletedTask}) {
    
    return(
        <>
        <div className="task-list"
            style= {{backgroundImage: `url(${tasklistBg})`}}>

            <h1>My Tasks</h1>
            {
            currentTasks.map((task) => {
                return <TaskCard key ={task.id}
                  task={task}
                  onCompletedTask={onCompletedTask} />

            
            })
        }
        
        
        <button className="open-task-form" onClick={onOpenForm} >
             +
         </button>
        {showForm ? <AddTask onAddTask={onAddTask} onCloseForm = {onCloseForm} /> : null}
        </div>
        </>

    );
}
export default TaskList;
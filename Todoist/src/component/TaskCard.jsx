function TaskCard({task, onCompletedTask}) {

    return(
        <div className="task-card">
            <div>
                <input
                 className="task-checkbox" 
                 type = "checkbox"
                 checked= {task.completed}
                 onChange={() => onCompletedTask(task.id)}/>
            </div>
        <div className="task-content">
            <h2>
                {task.title}
            </h2>
            <p>
                {task.date},
                {task.time},
                
            </p>
        </div>
        </div>
    );
}
export default TaskCard;
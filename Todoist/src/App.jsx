import {useState} from 'react';
import './App.css';
import Welcome from './component/Welcome';
import TaskList from './component/TaskList';
import AddTask from './component/AddTask';


function App() {
  

  const [started , setStarted] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  function changePage(){
    setStarted(true);
  }
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }
 function openForm(){
  setShowForm(true);
 }
 function markTaskComplete (taskId) { console.log(taskId);
  const updatedTasks = tasks.map((task) => {
    if (task.id === taskId){
        return{...task, completed:true};

    }
     return task;
    
  });
   console.log("Updated tasks:", updatedTasks);
  setTasks(updatedTasks);
}

  return(
    
  
  <div className = "app">
    <main className = "main-content">
    
    {started ? 
    <TaskList currentTasks={tasks} 
      onCompletedTask = {markTaskComplete} 
      onOpenForm = {openForm}
      onCloseForm= {()=> setShowForm(false)}
      showForm={showForm}
      onAddTask={handleAddTask}
  

    /> 
    :
    <Welcome onStart={changePage}/>}
    
    
    </main>
  </div>
    
  );
}
export default App;
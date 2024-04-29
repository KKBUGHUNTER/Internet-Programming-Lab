import { useState, useRef } from "react";

function App() {

  const userInput = useRef('');
  const [tasks, setTasks] = useState([]);
  
  const addTask = () => {
    const newTask =userInput.current.value ;
    setTasks(prevTask => [...prevTask, newTask]);
  }

  

  const style = {
    input: {
      padding: '12px',
      fontSize: '20px',
      width:"300px"
    },
    btn: {
      padding: '10px',
      fontSize: '20px',
      fontWeight: "bold",
    },
    displayTask: {
      marginTop: "25px",
      marginLeft: "25px",
      fontSize: '22px',
      textAlign:'left',
    },
    taskBtn: {
      border: '0',
      borderRadius:'5px',
      marginLeft: '10px',
      padding: '7px',
    },
    taskStyle: {
      padding: '10px',
      backgroundColor: 'lightblue',
      margin: '2px',
      borderRadius:'12px',
    },
  }

  return (
    <div style={{textAlign:"center", padding:"5px"}}>
      <input value="test" type="text" ref={userInput} placeholder='Enter Your New Task' style={style.input} />  <button type="submit" onClick={addTask} style={style.btn}> Add Task</button>       
      <h2> --- Your ToDo Task --- </h2>
      <section id="todo-task" style={style.displayTask}>
        {tasks.map((task, index) => (
          <div key={index} style={style.taskStyle}>
            {task}
            <span style={{float: "right"}}>
              <button type="submit" style={style.taskBtn}><img src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="delete" height="15px" /></button>
              <button type="submit" style={style.taskBtn}> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/512px-Flat_tick_icon.svg.png" alt="completed" height="15px" /></button>
            </span>
          </div>
        ))}
      </section>
      <h2> --- Completed Task --- </h2>
      <section id="completed-task"></section>
    </div>
  );
}

export default App;

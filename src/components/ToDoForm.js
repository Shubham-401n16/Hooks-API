import React, { useState } from 'react';

function ToDoForm(props) {
  const [ taskDescription, setTaskDescription ] = useState('');
  const [ assignedTo, setAssignedTo ] = useState('');
  const [ complete, setComplete ] = useState(false);
  const [ difficulty, setDifficulty ] = useState(1);

  function changeDifficulty(e){
      (e.target.value > 5) ? setDifficulty(5): (e.target.value < 1) ? setDifficulty(1):
      setDifficulty(e.target.value);
  }

  function changeList(){
      let task ={
          taskDescription,
          assignedTo,
          complete,
          difficulty
      }
      props.changeList([task])
  }

  return (
    <div id="form">
      <label >Task:</label>
      <textarea name="task" onChange={ (e) => { setTaskDescription(e.target.value) } } value={taskDescription}></textarea>

      <div>
        <label>Assigned To:</label>
        <input type="text" value={assignedTo} onChange={ (e) => { setAssignedTo(e.target.value) } }/>
      </div>
      
      <div>
        <label>Difficulty 1 to 5</label>
        <input type="number" min="1" max="5" value={difficulty} onChange={ updateDifficulty }/>
      </div>
      
      <div>
        <label>Complete</label>
        <input type="checkbox" checked={complete} onChange={ () => {setComplete(!complete)} }/>
      </div>


      <button type="submit" onClick={ changeList }>Submit</button>
    </div>
  )
}

export default ToDoForm;

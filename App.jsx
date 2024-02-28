/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import { Alert, SafeAreaView} from 'react-native';
import ToDoList from './component/ToDoList';
import ToDoForm from './component/ToDoForm';

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const addTask  = (taskText) => {
    if ( !tasks.includes(taskText) ){
      setTasks([...tasks, taskText]);
    }
    else {
      window.alert("Duplicate task!");
    }
  }

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask } />
    </SafeAreaView>
  );
}


export default App;

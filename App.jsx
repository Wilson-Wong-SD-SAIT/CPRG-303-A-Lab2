/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import { SafeAreaView} from 'react-native';
import ToDoList from './component/ToDoList';
import ToDoForm from './component/ToDoForm';

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const addToDo = (newItem) => {
    let newToDoList = tasks.slice();
    newToDoList.push(newItem);
    setTasks(newToDoList);
  }

  return (
    <SafeAreaView>
      <ToDoList tasks={todotaskslists} />
      <ToDoForm addToDo={addToDo} />
    </SafeAreaView>
  );
}


export default App;

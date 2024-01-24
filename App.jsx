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
  const [todolists, setTodolists] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const addToDo = (newItem) => {
    let newToDoList = todolists.slice();
    newToDoList.push(newItem);
    setTodolists(newToDoList);
  }

  return (
    <SafeAreaView>
      <ToDoList inputs={todolists} />
      <ToDoForm addToDo={addToDo} />
    </SafeAreaView>
  );
}


export default App;

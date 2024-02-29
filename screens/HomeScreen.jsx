
import React, {useState} from 'react';
import { SafeAreaView, View, Button, StyleSheet} from 'react-native';

import MainLayout from '../layouts/MainLayout';
import ToDoList from '../component/ToDoList';
import ToDoForm from '../component/ToDoForm';


function HomeScreen({ navigation }) {
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
      <MainLayout>
        <SafeAreaView>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask } />
            <View style={styles.buttonContainer}>
              <Button
                  title="Go to About"
                  onPress={() => navigation.navigate('About')}
              />
            </View>

        </SafeAreaView>
      </MainLayout>
    );
  }

  const styles = StyleSheet.create({
    buttonContainer: {
      marginVertical: 20,
      left: '5%',
      width: '90%',
    },
  });
  
  
  export default HomeScreen;
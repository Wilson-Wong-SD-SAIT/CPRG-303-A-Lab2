import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button
  } from 'react-native';

const ToDoForm = ({addTask}) => {
  const [taskText, setTaskText] = useState('');

  const OnSubmit =()=>{
    addTask(taskText);
    setTaskText('');
  };

    return (
        <View style={styles.form}>
            <TextInput
            style={styles.input}
            placeholder="Add a new task..."
            onChangeText={newText => setTaskText(newText)}
            value={taskText}
            />
            <Button title="Add Task" onPress={OnSubmit} />
        </View>
    );
};



const styles = StyleSheet.create({
    taskText: {
      fontSize: 16,
    },
    form: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 20,
      marginTop: 20,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginRight: 10,
    },
  });

export default ToDoForm;
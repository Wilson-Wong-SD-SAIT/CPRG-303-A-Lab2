import React from 'react';
import {
    StyleSheet,
    Pressable,
    View,
    Text,
    ScrollView,
  } from 'react-native';

const ToDoList = (props) => {
    const {inputs} = props;

    return (
        <ScrollView>
            {inputs.map(input => 
                <Pressable>
                  <View style={[styles.task, styles.completed]}>
                      <Text style={styles.taskText}>{input}</Text>
                  </View>
                </Pressable>
              )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
  }
);

export default ToDoList;
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {
    let date = new Date().toLocaleDateString();

    return (
        <MainLayout>
            <View>
                <Text><Text style={{fontWeight: "bold"}}>App Name:</Text> To-Do-List</Text>
                <Text><Text style={{fontWeight: "bold"}}>Author:</Text> Wilson Wong</Text>
                <Text><Text style={{fontWeight: "bold"}}>Current date:</Text> {date}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                  title="Go to Home"
                  onPress={() => navigation.navigate('Home')}
              />
            </View>
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
  
export default AboutScreen;
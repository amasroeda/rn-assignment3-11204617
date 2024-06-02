import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const tasks = [
  { id: '1', task: 'Mobile App Development' },
  { id: '2', task: 'Web Development' },
  { id: '3', task: 'Push Ups' },
  { id: '4', task: 'Read' },
  { id: '5', task: 'Cook' },
  { id: '6', task: 'Meditate' },
  { id: '7', task: 'Clean' },
  { id: '8', task: 'Research' },
  { id: '9', task: 'Code' },
  { id: '10', task: 'Organize' },
  { id: '11', task: 'Review' },
  { id: '12', task: 'Write' },
  { id: '13', task: 'Shop' },
  { id: '14', task: 'Design' },
  { id: '15', task: 'Plan' },


];

const TaskList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.task}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    
  },
  taskContainer: {
    display: 'flex',
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 5,
    borderRadius: 10,
    height: 100,
    justifyContent:'center',
    borderColor:'#E8D1BA',
    
    
  },
  taskText: {
    fontSize: 18,
  },
});

export default TaskList;

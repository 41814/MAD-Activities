import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState(''); // State for the input field
  const [tasks, setTasks] = useState([]); // State for the list of tasks

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { id: Math.random().toString(), value: task }]); // Add new task with unique id
      setTask(''); // Clear the input field
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); // Remove task by its ID
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>To-Do List</Text>
      
      {/* Input and Add Task Button */}
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title="Add Task" onPress={addTask} />

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removeTask(item.id)}>
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  taskItem: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
  },
  taskText: {
    fontSize: 18,
  },
});

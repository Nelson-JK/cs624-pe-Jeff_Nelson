import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Input from './Input';
import Heading from './Heading';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  inputChange(inputValue) {
    console.log('Input Value:', inputValue);
    this.setState({ inputValue });
  }

  addTodo() {
    const trimmed = this.state.inputValue.trim();
    if (!trimmed) return;

    const newTodo = {
      title: trimmed,
      todoIndex: this.state.todos.length,
      complete: false,
    };

    this.setState(
      prevState => ({
        todos: [...prevState.todos, newTodo], // ✅ add object to end using spread
        inputValue: '', // ✅ clear input after submit
      }),
      () => {
        // ✅ log updated state (matches instructor example)
        console.log('State:', this.state);
      }
    );
  }

  render() {
    const { inputValue, todos } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />

          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => this.addTodo()}
              activeOpacity={0.8}
            >
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.list}>
            {todos.map(todo => (
              <Text key={todo.todoIndex} style={styles.todoItem}>
                {todo.title}
              </Text>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { flex: 1, paddingTop: 60, paddingHorizontal: 20 },

  buttonRow: { alignItems: 'center', marginTop: 14, marginBottom: 10 },
  submitButton: {
    width: '60%',
    paddingVertical: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  submitText: { textAlign: 'center', fontSize: 16, color: '#444' },

  list: { marginTop: 12 },
  todoItem: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginBottom: 8,
    borderRadius: 4,
  },
});

export default App;
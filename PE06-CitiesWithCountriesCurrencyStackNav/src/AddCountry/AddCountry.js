import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';

import { colors } from '../theme';

const AddCountry = ({ addCountry }) => {
  const [name, setName] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = () => {
    if (name && currency) {
      addCountry({ name, currency });
      setName('');
      setCurrency('');
      Keyboard.dismiss();
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.title}>Countries</Text>

      <TextInput
        placeholder="Country name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Currency"
        style={styles.input}
        value={currency}
        onChangeText={setCurrency}
      />

      <TouchableOpacity onPress={handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Country</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
    justifyContent: 'flex-start',
  },
  title: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#666',
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AddCountry;

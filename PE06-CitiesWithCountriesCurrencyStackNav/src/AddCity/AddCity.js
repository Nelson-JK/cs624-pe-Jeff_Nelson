import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StyleSheet,
} from 'react-native';

class AddCity extends Component {
  state = {
    city: '',
    country: '',
  };

  submit = () => {
    const { city, country } = this.state;
    const { addCity, navigation } = this.props;

    if (!city.trim() || !country.trim()) {
      return;
    }

    addCity({
      name: city,
      country,
      locations: [],
    });

    this.setState({
      city: '',
      country: '',
    });

    Keyboard.dismiss();
    navigation.navigate('Cities');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter city name"
          value={this.state.city}
          onChangeText={(city) => this.setState({ city })}
          style={styles.input}
          returnKeyType="done"
        />

        <TextInput
          placeholder="Enter country name"
          value={this.state.country}
          onChangeText={(country) => this.setState({ country })}
          style={styles.input}
          returnKeyType="done"
        />

        <TouchableOpacity onPress={this.submit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

AddCity.propTypes = {
  addCity: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#d4d4d4',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3385ff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AddCity;
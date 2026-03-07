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

class AddCountry extends Component {
  state = {
    country: '',
    currency: '',
  };

  submit = () => {
    const { country, currency } = this.state;
    const { addCountry, navigation } = this.props;

    if (!country.trim() || !currency.trim()) {
      return;
    }

    addCountry({
      name: country,
      currency,
    });

    this.setState({
      country: '',
      currency: '',
    });

    Keyboard.dismiss();
    navigation.navigate('Countries');
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter country name"
          value={this.state.country}
          onChangeText={(country) => this.setState({ country })}
          style={styles.input}
          returnKeyType="done"
        />

        <TextInput
          placeholder="Enter currency"
          value={this.state.currency}
          onChangeText={(currency) => this.setState({ currency })}
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

AddCountry.propTypes = {
  addCountry: PropTypes.func.isRequired,
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

export default AddCountry;
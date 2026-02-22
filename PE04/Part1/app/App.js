import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={require('../assets/images/user.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  cardContainer: {
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,

    // Position card like screenshot
    marginTop: 120,
    alignSelf: 'center',
  },

  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,

    // KEY styling fixes from lab
    alignSelf: 'center',   // horizontal center
    marginTop: -60,        // overlap effect
    padding: 10,           // space inside circle
  },

  cardImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',   // center image inside circle
  },
});
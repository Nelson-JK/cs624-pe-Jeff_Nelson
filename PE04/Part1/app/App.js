import React, { Component } from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';

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

          <Text style={styles.name}>
            Jeff Nelson
          </Text>

          <Text style={styles.occupation}>
            React Native Developer
          </Text>

          <Text style={styles.description}>
            Jeff is a software developer focused on building mobile applications
            using React Native. He enjoys creating clean user interfaces and
            exploring modern styling techniques.
          </Text>

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

    marginTop: 120,
    alignSelf: 'center',
    alignItems: 'center',
  },

  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,

    alignSelf: 'center',
    marginTop: -60,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardImage: {
    width: 80,
    height: 80,
  },

  /* text stylingcd..  */

  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },

  occupation: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
    marginBottom: 15,
    textAlign: 'center',
  },

  description: {
    fontSize: 14,
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    lineHeight: 20,
  },
});
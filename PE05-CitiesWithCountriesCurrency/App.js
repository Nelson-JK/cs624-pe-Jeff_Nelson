import React, { Component } from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries';
import AddCountry from './src/AddCountry/AddCountry';
import { colors } from './src/theme';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({ cities }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Cities">
        {(props) => <Cities {...props} cities={cities} />}
      </Stack.Screen>

      <Stack.Screen
        name="City"
        component={City}
        options={({ route }) => ({
          title: route.params?.name || 'City',
        })}
      />
    </Stack.Navigator>
  );
}

function CountriesStackScreen({ countries }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Countries">
        {(props) => <Countries {...props} countries={countries} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default class App extends Component {
  state = {
    cities: [],
    countries: [],
  };

  addCity = (city) => {
    this.setState((currentState) => ({
      cities: [...currentState.cities, city],
    }));
  };

  addCountry = (country) => {
    this.setState((currentState) => ({
      countries: [...currentState.countries, country],
    }));
  };

  addLocation = (location, city) => {
    this.setState((currentState) => {
      const index = currentState.cities.findIndex(
        (item) => item.name === city.name
      );

      const cities = [...currentState.cities];

      if (index !== -1) {
        const currentLocations = cities[index].locations || [];
        cities[index] = {
          ...cities[index],
          locations: [...currentLocations, location],
        };
      }

      return { cities };
    });
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Countries"
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.primary,
          }}
        >
          <Tab.Screen name="Countries">
            {(props) => (
              <CountriesStackScreen
                {...props}
                countries={this.state.countries}
              />
            )}
          </Tab.Screen>

          <Tab.Screen name="AddCountry">
            {(props) => (
              <AddCountry
                {...props}
                addCountry={this.addCountry}
              />
            )}
          </Tab.Screen>

          <Tab.Screen name="Cities">
            {(props) => (
              <CitiesStackScreen
                {...props}
                cities={this.state.cities}
              />
            )}
          </Tab.Screen>

          <Tab.Screen name="AddCity">
            {(props) => (
              <AddCity
                {...props}
                addCity={this.addCity}
                countries={this.state.countries}
              />
            )}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
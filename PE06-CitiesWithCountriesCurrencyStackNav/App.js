import React, { Component } from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries';
import Country from './src/Countries/Country';
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
      <Stack.Screen name="Cities" options={{ title: 'Cities' }}>
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

function CountriesStackScreen({ countries, updateCurrency }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="Countries" options={{ title: 'Countries' }}>
        {(props) => (
          <Countries
            {...props}
            countries={countries}
            updateCurrency={updateCurrency}
          />
        )}
      </Stack.Screen>

      <Stack.Screen
        name="Country"
        component={Country}
        options={({ route }) => ({
          title: route.params?.name || 'Country',
        })}
      />
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

  updateCurrency = (countryName, newCurrency) => {
    this.setState((currentState) => ({
      countries: currentState.countries.map((country) =>
        country.name === countryName
          ? { ...country, currency: newCurrency }
          : country
      ),
    }));
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="CitiesNav"
          screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: colors.primary,
          }}
        >
          <Tab.Screen
            name="CitiesNav"
            options={{ title: 'CitiesNav' }}
          >
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

          <Tab.Screen name="CountriesNav">
            {(props) => (
              <CountriesStackScreen
                {...props}
                countries={this.state.countries}
                updateCurrency={this.updateCurrency}
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
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CenterMessage from '../CenterMessage';

const Countries = ({ countries, navigation, updateCurrency }) => {
  if (!countries.length) {
    return <CenterMessage message="No saved countries!" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Country', {
                name: item.name,
                currency: item.currency,
                updateCurrency,
              })
            }
          >
            <View style={styles.countryContainer}>
              <Text style={styles.countryName}>{item.name}</Text>
              <Text style={styles.currencyText}>{item.currency}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  updateCurrency: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  countryContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  countryName: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  currencyText: {
    fontSize: 18,
    color: '#666',
    marginTop: 5,
  },
});

export default Countries;
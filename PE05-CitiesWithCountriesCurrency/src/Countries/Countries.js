import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import CenterMessage from '../CenterMessage';

const Countries = ({ countries }) => {
  if (!countries.length) {
    return <CenterMessage message="No saved countries!" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={countries}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            {!!item.currency && (
              <Text style={styles.currency}>{item.currency}</Text>
            )}
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => `${item.name}-${index}`}
      />
    </View>
  );
};

Countries.propTypes = {
  countries: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#d4d4d4',
  },
  name: {
    fontSize: 22,
  },
  currency: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
});

export default Countries;
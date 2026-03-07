import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import City from './City';
import CenterMessage from '../CenterMessage';

const Cities = ({ cities, navigation }) => {
  if (!cities.length) {
    return <CenterMessage message="No saved cities!" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cities}
        renderItem={({ item, index }) => (
          <City {...item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => `${item.name}-${index}`}
      />
    </View>
  );
};

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Cities;
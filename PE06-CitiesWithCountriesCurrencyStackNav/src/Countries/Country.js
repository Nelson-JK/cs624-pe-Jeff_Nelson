import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { colors } from '../theme';

const Country = ({ route, navigation }) => {
  const { name, currency, updateCurrency } = route.params;

  const [currencyName, setCurrencyName] = useState(currency || '');
  const [currencyInfo, setCurrencyInfo] = useState('');
  const [currencyItems, setCurrencyItems] = useState(
    currency
      ? [
          {
            name: currency,
            info: `${name} ${currency}`,
          },
        ]
      : []
  );

  const handleAddCurrency = () => {
    if (!currencyName.trim()) {
      return;
    }

    const newItem = {
      name: currencyName,
      info: currencyInfo.trim() ? currencyInfo : `${name} ${currencyName}`,
    };

    setCurrencyItems((currentItems) => [newItem, ...currentItems]);

    if (updateCurrency) {
      updateCurrency(name, currencyName);
    }

    navigation.setParams({
      currency: currencyName,
    });

    setCurrencyName('');
    setCurrencyInfo('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {currencyItems.map((item, index) => (
          <View key={`${item.name}-${index}`} style={styles.currencyBox}>
            <Text style={styles.currencyTitle}>{item.name}</Text>
            <Text style={styles.currencySubtitle}>{item.info}</Text>
          </View>
        ))}
      </View>

      <View style={styles.formContainer}>
        <TextInput
          placeholder="Currency name"
          placeholderTextColor="#fff"
          style={styles.input}
          value={currencyName}
          onChangeText={setCurrencyName}
        />

        <TextInput
          placeholder="Currency info"
          placeholderTextColor="#fff"
          style={styles.input}
          value={currencyInfo}
          onChangeText={setCurrencyInfo}
        />

        <TouchableOpacity onPress={handleAddCurrency}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Currency</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'space-between',
  },
  listContainer: {
    flex: 1,
  },
  currencyBox: {
    backgroundColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  currencyTitle: {
    fontSize: 20,
    color: '#000',
  },
  currencySubtitle: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  formContainer: {
    backgroundColor: colors.primary,
    paddingTop: 8,
    paddingBottom: 10,
  },
  input: {
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginHorizontal: 6,
    marginBottom: 14,
    paddingVertical: 6,
    paddingHorizontal: 2,
  },
  button: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Country;


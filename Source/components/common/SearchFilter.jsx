
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { deals } from './datapro';

const SearchFilter = ({ data, input, setInput }) => {
  const navigation = useNavigation();

  const filteredData = input
    ? deals.filter(item => item.title.toLowerCase().includes(input.toLowerCase()))
    : [];

  const handleResultPress = (item) => {
    navigation.navigate('DealsInfo', { main: item });
  };

  const renderListItem = (item) => (
    <TouchableOpacity onPress={() => handleResultPress(item)} key={item.id}>
      <View style={styles.itemContainer}>
        <View style={{ flex: 0.3 }}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
        </View>
        <View style={{ flex: 0.7 }}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <View>
        {filteredData.map(renderListItem)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
    flexWrap: 'wrap',
    padding: 1,
    marginBottom: 5,
    marginRight: 1,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#171717'
  },
  itemImage: {
    width: 45,
    height: 45,
    marginRight: 1,
    borderRadius: 6,
    resizeMode: "cover",
    marginLeft: 1,
  },
  itemTitle: {
    fontSize: 12,
    paddingRight: 10
  }
});

export default SearchFilter;


import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    marginTop:40,
    
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Vanessa' },
          { key: 'Théo' },
          { key: 'Caio' },
          { key: 'Wallace' },
          { key: 'Wellington' },
          { key: 'Harry' },
          { key: 'Potter' },
          { key: 'Hermione' },
          { key: 'Rony' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;



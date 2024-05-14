import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { PlaceItem } from './PlaceItem';
import { Colors } from '../../constants/styles';

export function PlacesList({ places }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={places}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.primary200,
  },
});

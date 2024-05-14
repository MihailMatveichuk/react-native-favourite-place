import React from 'react';
import { Image, Text, View, Pressable, StyleSheet } from 'react-native';

export function PlaceItem({ place, onSelect }) {
  const { title, imageUri, address, location } = place;

  return (
    <Pressable
      style={(pressed) => [styles.container, pressed && styles.pressed]}
      onPress={onSelect}
    >
      <Image source={{ uri: imageUri }} alt={place.title} />
      <View>
        <Text>{title}</Text>
        <Text>{address}</Text>
        <Text>{`${location.lat}, ${location.lng}`}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 6,
    marginVertical: 12,
  },
  pressed: {
    opacity: 0.5,
  },
});

import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function IconButton({ color, type, size, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Ionicons name={type} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    padding: 8,
    margin: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.3,
  },
});

import React, { useState } from 'react';
import { Text, View, ScrollView, TextInput, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';
import { ImagePicker } from '../UI';

export function PlaceForm() {
  const [title, setTitle] = useState('');

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.text}>Place Form</Text>
        <TextInput
          placeholder="Title"
          onChange={handleTitleChange}
          value={title}
          style={styles.input}
          placeholderTextColor={Colors.primary900}
        />
      </View>
      <ImagePicker />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  text: {
    marginBottom: 8,
    color: Colors.primary500,
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 8,
    padding: 6,
    fontSize: 14,
    color: Colors.primary900,
    backgroundColor: Colors.primary100,
    borderRadius: 2,
  },
});

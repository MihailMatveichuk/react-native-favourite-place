import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';
import { Colors } from '../../constants/styles';

export function ImagePicker() {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();
  const [imageUri, setImageUri] = useState(null);

  const verifyPermissions = async () => {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Permission Denied!',
        'You need to grant camera permissions to use this app.'
      );

      return false;
    }

    return true;
  };

  const handleImagePicked = async () => {
    const haspermission = await verifyPermissions();

    if (!haspermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspectRatio: [16, 9],
      quality: 0.5,
    });

    setImageUri(image.assets[0].uri);
  };

  return (
    <View>
      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>No image selected</Text>
        )}
      </View>
      <Button title="Take a photo" onPress={handleImagePicked} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '100%',
    height: 300,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: Colors.primary100,
  },

  imageText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.primary900,
  },

  image: {
    width: '95%',
    height: '95%',
  },
});

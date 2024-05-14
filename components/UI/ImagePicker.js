import React from 'react';
import { Alert, Button, View } from 'react-native';
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from 'expo-image-picker';

export function ImagePicker() {
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

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
    console.log(image.assets[0].uri);
  };

  return (
    <View>
      <View></View>
      <Button title="Take a photo" onPress={handleImagePicked} />
    </View>
  );
}

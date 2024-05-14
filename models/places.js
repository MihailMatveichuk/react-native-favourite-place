import uuid from 'react-native-uuid';

export class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id = uuid.v4();
  }
}

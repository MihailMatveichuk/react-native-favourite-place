import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AllPlaces, PlaceDetails, AddPlace, Map } from './screens';
import { IconButton } from './components/UI';
import { Colors } from './constants/styles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your Favourite Places',
              headerRight: ({ tintColor }) => (
                <IconButton
                  color={tintColor}
                  type="add"
                  size={24}
                  onPress={() => navigation.navigate('AddPlace')}
                />
              ),
            })}
          />
          <Stack.Screen name="PlaceDetails" component={PlaceDetails} />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{ title: 'Add a new place' }}
          />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

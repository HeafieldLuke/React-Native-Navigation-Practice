import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

const HomeScreen = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Text>{route.params?.id}</Text>
      <Button
      onPress={() => navigation.navigate('Settings', { id: Math.random()})}
      title="Go to settings"
      />
      
    </View>
  );
}

const SettingsMain = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Main!</Text>
      <Text>{route.params?.id}</Text>
      <Button
      onPress={() => navigation.navigate('Home', { id: Math.random()})}
      title="Go to settings"
      />
    </View>
  );
}

const SettingsSecondary = ({ navigation, route }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Secondary!</Text>
      <Text>{route.params?.id}</Text>
      <Button
      onPress={() => navigation.navigate('Home', { id: Math.random()})}
      title="Go to settings"
      />
    </View>
  );
}

const Stack = createStackNavigator();

const SettingsScreen = ({ navigation, route}) => {
  console.log(route.params?.id)
  return (
    <Stack.Navigator initialRouteName={(route.params?.id >= 0.5) ? 'main': 'secondary'}>
      <Stack.Screen name="main" component={SettingsMain} />
      <Stack.Screen name="secondary" component={SettingsSecondary} />
    </Stack.Navigator>
  )
}
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} initialParams={{ id: 1 }} />
          <Tab.Screen name="Settings" component={SettingsScreen} initialParams={{ id: 2 }}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React, { useState } from 'react';
import Home from './src/pages/Home';
import CreateALarm from './src/pages/CreateAlarm';
import { DefaultTheme, Provider as PaperProvider, Appbar, DarkTheme } from 'react-native-paper';
import { Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  
  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    fonts: 'regular',
    mode: 'exact',
    colors: {
      ...DefaultTheme.colors,
      primary: '#26827F',
      accent: '#26827F',
      surface: '#EBE9E4',
      background: '#fff'
    },
  };

  const darkTheme = {
    ...DarkTheme,
    roundness: 2,
    fonts: 'regular',
    mode: 'exact',
    colors: {
      ...DarkTheme.colors,
      primary: '#26827F',
      accent: '#26827F',
      background: '#000000',
      surface: '#5E5E5E',
      text: '#fff' 
    }
  }
  return (
    <NavigationContainer>
      <PaperProvider theme={isEnabled? darkTheme : theme}>
         
          <Appbar.Header>
            <Appbar.BackAction></Appbar.BackAction>
            <Appbar.Content title="Põe a Máscara"></Appbar.Content>
            <Switch
              trackColor={{ false: darkTheme.colors.surface, true: darkTheme.colors.surface }}
              thumbColor={isEnabled ? darkTheme.colors.background : theme.colors.background}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled} 
            />
          </Appbar.Header>
      
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="create" component={CreateALarm} />
          </Stack.Navigator>

      </PaperProvider>
    </NavigationContainer>
  );

  

}

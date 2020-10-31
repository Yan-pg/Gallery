import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import Camera from '../pages/camera';
import {NavigationContainer} from '@react-navigation/native';

const Route = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Route.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Route.Screen name="Dashboard" component={Dashboard} />
        <Route.Screen name="Camera" component={Camera} />
      </Route.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;

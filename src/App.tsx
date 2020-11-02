import React from 'react';
import {View, StatusBar} from 'react-native';
import AppRoutes from './routes/app.routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
        <AppRoutes />
      </View>
    </>
  );
};

export default App;

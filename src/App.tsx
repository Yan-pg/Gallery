import React from 'react';
import {View, StatusBar} from 'react-native';
import AppRoutes from './routes/app.routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#FEF4E1" barStyle="dark-content" />
      <View style={{flex: 1, backgroundColor: '#FEF4E1'}}>
        <AppRoutes />
      </View>
    </>
  );
};

export default App;

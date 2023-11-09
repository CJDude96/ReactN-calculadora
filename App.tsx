import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import {mainStyles as styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;

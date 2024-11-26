import { TamaguiProvider, Theme, createTamagui } from '@tamagui/core';
import { config } from '@tamagui/config/v3';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from '@tamagui/core';
import { StyleSheet } from 'react-native';
import { Button } from 'tamagui';

const tamaguiConfig = createTamagui(config);

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name="dark">
        <View style={styles.container}>
          <Text>Hola, Coder!</Text>
          <Button onPress={() => console.log('HOLA')}>BUTTON</Button>
          <StatusBar style="auto" />
        </View>
      </Theme>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

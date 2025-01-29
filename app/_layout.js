import { TamaguiProvider, Theme, createTamagui } from '@tamagui/core';
import { config } from '@tamagui/config/v3';
import { StatusBar } from 'expo-status-bar';
import { View } from '@tamagui/core';
import { StyleSheet } from 'react-native';
import { Slot, Stack } from 'expo-router';
const tamaguiConfig = createTamagui(config);

export default function RootLayout() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name="dark">
        <View style={styles.container}>
          <Slot />
          <StatusBar style="auto" />
          {/* <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack> */}
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

import { View } from 'tamagui';

export const ViewContainer = ({ children }) => {
  return (
    <View flex={1} gap={10} padding={10} backgroundColor="transparent">
      {children}
    </View>
  );
};

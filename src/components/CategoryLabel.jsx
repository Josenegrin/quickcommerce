import { useRouter } from 'expo-router';
import { Button, Text } from 'tamagui';

export const CategoryLabel = ({ category }) => {
  const { push } = useRouter();
  const handlePress = () => push(`/category/${category}`);

  return (
    <Button backgroundColor="#ff4d4f" onPress={handlePress}>
      <Text
        fontSize={14}
        fontWeight="bold"
        color="white"
        textTransform="capitalize"
      >
        {category}
      </Text>
    </Button>
  );
};

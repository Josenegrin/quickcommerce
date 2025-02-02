import React from 'react';
import { Text, Image, Button, YStack, Card } from 'tamagui';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const ProductCard = React.memo(({ product }) => {
  const { push } = useRouter();
  const handlePress = () => push(`/product/${product.id}`);

  return (
    <Card
      bordered
      size="$4"
      width={150}
      height={250}
      flex={1}
      borderRadius={20}
      borderWidth={0.5}
      borderColor="$gray5"
      margin={0.5}
      backgroundColor="white"
      onPress={handlePress}
    >
      <Card.Header style={{ position: 'absolute', top: 0, right: 0 }}>
        <Button
          width={20}
          height={20}
          unstyled
          onPress={() => {}}
          alignSelf="flex-start"
          icon={<FontAwesome name="heart-o" size={16} color="#666" />}
        ></Button>
      </Card.Header>
      <Card.Background>
        <Pressable onPress={handlePress}>
          <Image
            objectFit="contain"
            alignSelf="center"
            source={{ width: 150, height: 200, uri: product.thumbnail }}
          />
        </Pressable>
      </Card.Background>
      <Card.Footer padding={6}>
        <YStack gap={6} width="100%">
          <Text numberOfLines={1} fontSize={14}>
            {product.title}
          </Text>
          <Text color="gray" fontSize={14} textAlign="right">
            ${product.price.toFixed(2)}
          </Text>
          <Button
            iconAfter={
              <FontAwesome name="shopping-cart" size={14} color="white" />
            }
            backgroundColor="#ff4d4f"
            size="$4"
            color="white"
            fontWeight="bold"
            fontSize={14}
          >
            Add to Cart
          </Button>
        </YStack>
      </Card.Footer>
    </Card>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;

import React from 'react';
import { Text, Image, Button, YStack, Card } from 'tamagui';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectIsInCart,
} from '@store/slices/cartSlice';
import {
  addToWishlist,
  removeFromWishlist,
  selectIsInWishlist,
} from '@store/slices/wishlistSlice';

const ProductCard = React.memo(({ product }) => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const isInCart = useSelector((state) => selectIsInCart(state, product.id));
  const handlePress = () => push(`/product/${product.id}`);
  const handleAddToCart = () => dispatch(addToCart(product));
  const handleAddToWishlist = () => dispatch(addToWishlist(product));
  const handleRemoveFromWishlist = () =>
    dispatch(removeFromWishlist(product.id));
  const isInWishlist = useSelector((state) =>
    selectIsInWishlist(state, product.id)
  );
  const handleRemoveFromCart = () => dispatch(removeFromCart(product.id));

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
          onPress={
            isInWishlist ? handleRemoveFromWishlist : handleAddToWishlist
          }
          width={20}
          height={20}
          unstyled
          alignSelf="flex-start"
          icon={
            <FontAwesome
              name="heart-o"
              size={16}
              color={isInWishlist ? 'red' : '#666'}
              fill={isInWishlist ? 'red' : '#666'}
            />
          }
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
            backgroundColor={isInCart ? 'gray' : '#ff4d4f'}
            size="$4"
            color="white"
            fontWeight="bold"
            fontSize={14}
            onPress={isInCart ? handleRemoveFromCart : handleAddToCart}
          >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
          </Button>
        </YStack>
      </Card.Footer>
    </Card>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;

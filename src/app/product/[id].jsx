import { useLocalSearchParams } from 'expo-router/build/hooks';
import { Button, Image, ScrollView, Text, View } from 'tamagui';
import ProductData from '../../../temporary-data.json';
import { useLayoutEffect, useMemo } from 'react';
import { ViewContainer } from '@components/ViewContainer';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectIsInCart,
} from '@store/slices/cartSlice';

const ProductScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const product = useMemo(
    () => ProductData.products.find((p) => p.id === Number(id)),
    [id]
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Product details',
      headerBackTitle: '',
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  const handleAddToCart = () => dispatch(addToCart(product));
  const handleRemoveFromCart = () => dispatch(removeFromCart(product.id));
  const isInCart = useSelector((state) => selectIsInCart(state, product.id));

  return (
    <ScrollView flex={1}>
      <View>
        <Image
          objectFit="contain"
          alignSelf="center"
          source={{ uri: product.images[0], width: '100%', height: 350 }}
        />
      </View>
      <ViewContainer>
        <View
          flexDirection="row"
          justifyContent="space-between"
          gap={10}
          marginVertical={10}
        >
          <Text numberOfLines={1} fontSize={14} fontWeight="bold">
            {product.title}
          </Text>
          <Text color="gray" fontWeight="bold" fontSize={14} textAlign="right">
            ${product.price.toFixed(2)}
          </Text>
        </View>
        <Text>{product.description}</Text>
        <Button
          iconAfter={
            <FontAwesome name="shopping-cart" size={14} color="white" />
          }
          backgroundColor={isInCart ? 'gray' : '#ff4d4f'}
          color="white"
          fontWeight="bold"
          fontSize={14}
          alignSelf="center"
          marginTop={10}
          onPress={() =>
            isInCart ? handleRemoveFromCart() : handleAddToCart()
          }
        >
          {isInCart ? 'Remove from cart' : 'Add to cart'}
        </Button>
      </ViewContainer>
    </ScrollView>
  );
};

export default ProductScreen;

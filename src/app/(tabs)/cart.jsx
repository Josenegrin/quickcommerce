import { CartProductCard } from '@components/CartProductCard';
import { ViewContainer } from '@components/ViewContainer';
import { CartFooter } from '@src/components/CartFooter';
import { selectCartItems } from '@src/store/slices/cartSlice';
import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Text, View } from 'tamagui';

const CartScreen = () => {
  const cartItems = useSelector(selectCartItems);
  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <ViewContainer>
      {cartItems.length > 0 ? (
        <View justifyContent="space-between" flex={1}>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => (
              <CartProductCard
                key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                price={item.price}
                id={item.id}
              />
            )}
            contentContainerStyle={{ gap: 10 }}
            keyExtractor={keyExtractor}
          />
          <CartFooter products={cartItems} />
        </View>
      ) : (
        <View flex={1} justifyContent="center" alignItems="center" gap={10}>
          <Text
            textAlign="center"
            verticalAlign="center"
            fontSize={16}
            fontWeight="bold"
          >
            No items in cart
          </Text>
        </View>
      )}
    </ViewContainer>
  );
};

export default CartScreen;

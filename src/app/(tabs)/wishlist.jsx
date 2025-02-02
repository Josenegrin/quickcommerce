import ProductCard from '@src/components/ProductCard';
import { ViewContainer } from '@src/components/ViewContainer';
import { selectWishlistItems } from '@src/store/slices/wishlistSlice';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { Button, Text, View } from 'tamagui';

const WishlistScreen = () => {
  const { push } = useRouter();
  const wishlistItems = useSelector(selectWishlistItems);
  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return (
    <ViewContainer>
      {wishlistItems.length > 0 ? (
        <FlatList
          numColumns={2}
          contentContainerStyle={{ gap: 10 }}
          data={wishlistItems}
          renderItem={({ item }) => <ProductCard product={item} />}
          keyExtractor={keyExtractor}
        />
      ) : (
        <View flex={1} justifyContent="center" alignItems="center" gap={10}>
          <Text
            textAlign="center"
            verticalAlign="center"
            fontSize={16}
            fontWeight="bold"
          >
            No items in wishlist
          </Text>
          <Button
            fontWeight="bold"
            fontSize={14}
            backgroundColor="#ff4d4f"
            color="white"
            onPress={() => push('/')}
          >
            Back To The Home
          </Button>
        </View>
      )}
    </ViewContainer>
  );
};

export default WishlistScreen;

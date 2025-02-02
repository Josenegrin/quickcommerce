import { ViewContainer } from '@src/components/ViewContainer';
import { H3 } from 'tamagui';
import ProductCard from '@src/components/ProductCard';
import ProductData from '../../../temporary-data.json';
import { FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useCallback, useMemo } from 'react';

export default function CategoryScreen() {
  const { id } = useLocalSearchParams();

  const categoryProducts = useMemo(
    () => ProductData.products.filter((product) => product.category === id),
    [id]
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const renderProduct = useCallback(
    ({ item }) => <ProductCard product={item} />,
    []
  );

  return (
    <ViewContainer>
      <H3 textAlign="center">Category: {id}</H3>
      <FlatList
        data={categoryProducts}
        renderItem={renderProduct}
        keyExtractor={keyExtractor}
        numColumns={2}
        contentContainerStyle={{ padding: 1, gap: 10 }}
        showsVerticalScrollIndicator={false}
      />
    </ViewContainer>
  );
}

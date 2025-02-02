import React, { useState, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { Stack, XStack } from 'tamagui';
import ProductCard from '../../components/ProductCard';
import productsData from '../../../temporary-data.json';
import categoriesData from '../../../temporary-data-categories.json';
import { SearchBar } from '@components/SearchBar';
import { ViewContainer } from '@src/components/ViewContainer';
import { CategoryLabel } from '@src/components/CategoryLabel';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const renderProduct = useCallback(
    ({ item }) => <ProductCard product={item} />,
    []
  );

  const renderCategory = useCallback(
    ({ item }) => <CategoryLabel category={item} />,
    []
  );
  const categoryKeyExtractor = useCallback((item) => item, []);
  const keyExtractor = useCallback((item) => item.id.toString(), []);

  const filteredProducts = useMemo(() => {
    if (!searchQuery) {
      return productsData.products;
    }

    return productsData.products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <ViewContainer flex={1} gap={10} padding={10}>
      <Stack>
        <Stack padding="$4" space="$3">
          <XStack space="$3" alignItems="center">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </XStack>
          <XStack space="$2" marginTop="$2" marginVertical={10}>
            <FlatList
              data={categoriesData.categories}
              renderItem={renderCategory}
              keyExtractor={categoryKeyExtractor}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10 }}
            />
          </XStack>
        </Stack>

        <FlatList
          data={filteredProducts}
          renderItem={renderProduct}
          keyExtractor={keyExtractor}
          numColumns={2}
          contentContainerStyle={{ padding: 1, gap: 10 }}
          showsVerticalScrollIndicator={false}
        />
      </Stack>
    </ViewContainer>
  );
}

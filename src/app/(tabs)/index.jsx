import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { Stack, Text, XStack } from 'tamagui';
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

  return (
    <ViewContainer flex={1} gap={10} padding={10}>
      <Stack>
        <Stack padding="$4" space="$3">
          <Text fontSize={24} fontWeight="bold">
            Match Your Style
          </Text>
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
          data={productsData.products}
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

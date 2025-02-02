import { useMemo } from 'react';
import { Button, Separator, Text, View } from 'tamagui';

export const CartFooter = ({ products }) => {
  const totalPrice = useMemo(
    () => products.reduce((acc, product) => acc + product.price, 0),
    [products]
  );
  return (
    <View gap={10} marginVertical={10}>
      <Separator />
      <View flexDirection="row" justifyContent="space-between">
        <Text fontSize={16} fontWeight="bold">
          Total:
        </Text>
        <Text fontSize={16} fontWeight="bold">
          ${totalPrice}
        </Text>
      </View>
      <Button
        backgroundColor="#ff4d4f"
        color="white"
        fontWeight="bold"
        fontSize={14}
      >
        Checkout
      </Button>
    </View>
  );
};

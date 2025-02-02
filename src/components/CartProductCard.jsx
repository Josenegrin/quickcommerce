import { FontAwesome } from '@expo/vector-icons';
import { removeFromCart } from '@src/store/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { Button, Image, Text, View } from 'tamagui';

export const CartProductCard = ({ thumbnail, title, price, id }) => {
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => dispatch(removeFromCart(id));

  return (
    <View flexDirection="row" gap={10} width="100%">
      <View
        borderWidth={1}
        borderColor="red"
        borderRadius={10}
        marginRight={10}
        backgroundColor="white"
      >
        <Image
          source={{
            uri: thumbnail,
          }}
          objectFit="contain"
          width={100}
          height={100}
        />
      </View>
      <View flex={1} gap={10}>
        <Text fontSize={12} fontWeight="bold" numberOfLines={1}>
          {title}
        </Text>
        <Text color="gray" fontWeight="bold" fontSize={16}>
          ${price.toFixed(2)}
        </Text>
      </View>
      <View marginRight={10}>
        <Button unstyled onPress={handleRemoveFromCart}>
          <FontAwesome name="trash" size={16} color="red" />
        </Button>
      </View>
    </View>
  );
};

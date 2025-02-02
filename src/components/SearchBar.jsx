import { Input } from 'tamagui';

export const SearchBar = ({ value, onChange }) => {
  return (
    <Input
      flex={1}
      value={value}
      onChangeText={onChange}
      backgroundColor="white"
      placeholderTextColor="gray"
      placeholder="Search"
    />
  );
};

import React from 'react';
import { Input, Text, YStack } from 'tamagui';

export const FormInput = ({
  field,
  form: { touched, errors, setFieldValue },
  label,
  ...props
}) => {
  const hasError = touched[field.name] && errors[field.name];

  return (
    <YStack gap={10}>
      {label && <Text>{label}</Text>}
      <Input
        value={field.value}
        onChangeText={(text) => setFieldValue(field.name, text)}
        placeholderTextColor={hasError ? 'red' : 'gray'}
        {...field}
        {...props}
        borderColor={hasError ? 'red' : 'gray'}
      />
      {hasError && (
        <Text color="red" fontSize={16}>
          {errors[field.name]}
        </Text>
      )}
    </YStack>
  );
};

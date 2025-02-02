import { Formik, Field } from 'formik';
import { Form, Button, YStack, Text, XStack } from 'tamagui';
import { useNavigation, useRouter } from 'expo-router';
import { registerUser } from '../../services/firebase';
import { registerSchema } from '../../utils/validationSchemas';
import { FormInput } from '../../components/FormInput';
import { ViewContainer } from '@components/ViewContainer';
import { useLayoutEffect } from 'react';

export default function RegisterScreen() {
  const navigation = useNavigation();
  const router = useRouter();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Register',
      headerBackTitle: '',
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  const handleRegister = async (values, { setSubmitting, setFieldError }) => {
    try {
      await registerUser(
        values.email,
        values.password,
        values.name,
        values.surname
      );
      router.replace('/');
    } catch (error) {
      setFieldError('general', error.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ViewContainer>
      <YStack padding="$4" gap={10}>
        <Text fontSize={24} fontWeight="bold">
          Create Account
        </Text>

        <Formik
          initialValues={{
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={registerSchema}
          onSubmit={handleRegister}
        >
          {({ handleSubmit, isSubmitting, errors }) => (
            <Form onSubmit={handleSubmit}>
              <YStack gap={10}>
                <Field component={FormInput} name="name" placeholder="Name" />

                <Field
                  component={FormInput}
                  name="surname"
                  placeholder="Surname"
                />

                <Field
                  component={FormInput}
                  name="email"
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />

                <Field
                  component={FormInput}
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                />

                <Field
                  component={FormInput}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  secureTextEntry
                />

                {errors.general && (
                  <Text color="#ff4d4f">{errors.general}</Text>
                )}

                <Button
                  backgroundColor="#ff4d4f"
                  color="white"
                  fontWeight="bold"
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating Account...' : 'Register'}
                </Button>

                <XStack justifyContent="center" gap={10}>
                  <Text>Already have an account? </Text>
                  <Text
                    color="#ff4d4f"
                    onPress={() => router.push('/auth/login')}
                  >
                    Login
                  </Text>
                </XStack>
              </YStack>
            </Form>
          )}
        </Formik>
      </YStack>
    </ViewContainer>
  );
}

import { Formik, Field } from 'formik';
import { Form, Button, YStack, Text, XStack } from 'tamagui';
import { useNavigation, useRouter } from 'expo-router';
import { loginUser } from '@services/firebase';
import { loginSchema } from '@utils/validationSchemas';
import { FormInput } from '@components/FormInput';
import { ViewContainer } from '@components/ViewContainer';
import { useLayoutEffect } from 'react';

export default function LoginScreen() {
  const navigation = useNavigation();
  const router = useRouter();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Login',
      headerBackTitle: '',
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  const handleLogin = async (values, { setSubmitting, setFieldError }) => {
    try {
      await loginUser(values.email, values.password);
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
          Welcome Back
        </Text>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={handleLogin}
        >
          {({ handleSubmit, isSubmitting, errors }) => (
            <Form onSubmit={handleSubmit}>
              <YStack gap={10}>
                <Field
                  color="black"
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
                  {isSubmitting ? 'Logging in...' : 'Login'}
                </Button>

                <XStack justifyContent="center" gap={10}>
                  <Text>Don't have an account? </Text>
                  <Text
                    color="#ff4d4f"
                    onPress={() => router.push('/auth/register')}
                  >
                    Register
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

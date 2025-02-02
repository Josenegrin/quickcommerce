import { useEffect, useState } from 'react';
import { YStack, Button, Text, Avatar, View } from 'tamagui';
import { auth } from '@services/firebase';
import { useRouter } from 'expo-router';
import { ViewContainer } from '@components/ViewContainer';

const ProfileScreen = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        router.replace('/auth/login');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.replace('/auth/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <View
      flex={1}
      gap={10}
      padding={10}
      backgroundColor="transparent"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar circular size="$12">
        <Avatar.Image
          source={{
            uri:
              user.photoURL ||
              'https://ui-avatars.com/api/?name=' + user.displayName,
          }}
        />
        {/* <Avatar.Fallback backgroundColor="$gray5" /> */}
        <Avatar.Fallback backgroundColor="gray" />
      </Avatar>

      <Text fontSize={14} fontWeight="bold">
        {user.displayName}
      </Text>

      {/* <Text fontSize="$4" color="$gray11"> */}
      <Text fontSize={14} color="gray">
        {user.email}
      </Text>

      <Button
        backgroundColor="#ff4d4f"
        color="white"
        fontWeight="bold"
        onPress={handleLogout}
        width="100%"
      >
        Logout
      </Button>
    </View>
  );
};

export default ProfileScreen;

import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { Link, Stack } from 'expo-router';

export default function ModalScreen() {
  return (

    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },   }}
      />
      <Text>Home Screen</Text>
      <Link href={{ pathname: 'details', params: { name: 'Bacon' } }}>Go to Details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
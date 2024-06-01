import { StyleSheet, Text, View } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "",
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <Text style={styles.headerLeftTitle}>Duoph</Text>
          ),
        }}
      />

      <Text style={styles.title}>Home Screen</Text>
      <Link href={'/Screens/screen1'}>Go to Details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    textAlign: 'center',
    color: 'black',
  },
  headerLeftTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
});

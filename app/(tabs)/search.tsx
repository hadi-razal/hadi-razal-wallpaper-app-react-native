import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Search Page</Text>
            <Link href={'/tabs/index'}>Go to Details</Link>
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
        color: '#793BEC',
        fontWeight: 'bold',
        paddingVertical: 10,
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

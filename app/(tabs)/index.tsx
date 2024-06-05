import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
    return (

        <ScrollView>

            <View style={styles.container}>

                <Text style={styles.title}>Home Page</Text>

                <View style={styles.hero}>
                    <Text style={styles.heroText}>DUOPH</Text>
                </View>
                <View style={styles.hero}>
                    <Text style={styles.heroText}>DUOPH</Text>
                </View>
                <View style={styles.hero}>
                    <Text style={styles.heroText}>DUOPH</Text>
                </View>
                <View style={styles.hero}>
                    <Text style={styles.heroText}>DUOPH</Text>
                </View>
                <View style={styles.hero}>
                    <Text style={styles.heroText}>DUOPH</Text>
                </View>
                <View style={styles.hero}>
                    <Text style={styles.heroText}>DUOPH</Text>
                </View>

                <Link href={'/Screens/testScreen'}>Go to Details</Link>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,

        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    title: {
        fontSize: 50,
        color: '#793BEC',
        fontWeight: 'bold',
        paddingVertical: 10,
        textAlign: "center"
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
    }, hero: {
        backgroundColor: "black",
        width: '100%',
        height: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    }, heroText: {
        fontSize: 50,
        color: 'white',
        fontWeight: '900',
        paddingVertical: 10,
    }
});

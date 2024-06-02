import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Page</Text>
            <TextInput placeholder='Email' style={{ backgroundColor: "#EDEFF0", width: 300, padding: 3, borderRadius: 5, paddingVertical: 10, shadowColor: 'gray', shadowOpacity: 50, shadowOffset: { width: 5, height: 5 }, color: "black" }} />
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
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Page() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile Page</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Email'
                    placeholderTextColor="#000000" // Change this to your desired color
                    style={styles.input}
                />
                <TextInput
                    placeholder='Email'
                    placeholderTextColor="#000000" // Change this to your desired color
                    style={styles.input}
                />
                <TextInput
                    placeholder='Email'
                    placeholderTextColor="#000000" // Change this to your desired color
                    style={styles.input}
                />
                <TouchableOpacity style={styles.btn}>
                    <Button color={"white"} title='Submit' />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    input: {
        backgroundColor: "#d9d9d9", width: 300, paddingHorizontal: 7, borderRadius: 5, paddingVertical: 20
    },
    title: {
        fontSize: 30,
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
    }, inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    }, btn: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#793BEC',
        borderRadius: 10,
    }
});
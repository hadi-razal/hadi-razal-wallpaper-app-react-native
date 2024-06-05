import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Page() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = () => {
        try {
            console.log(name, email, password);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={(text) => setName(text)}
                    value={name}
                    placeholder='Name'
                    placeholderTextColor="#b4b5b8"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder='Email'
                    placeholderTextColor="#b4b5b8"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    placeholder='Password'
                    placeholderTextColor="#b4b5b8"
                    style={styles.input}
                    secureTextEntry
                />
                <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
                    <Text style={styles.btnText}>Submit</Text>
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
        padding: 20,
        paddingHorizontal: 30
    },
    input: {
        backgroundColor: "#d9d9d9",
        paddingHorizontal: 7,
        borderRadius: 5,
        width: '100%',
        paddingVertical: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 40,
        color: '#793BEC',
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#793BEC',
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        marginVertical: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '300',
    },
});

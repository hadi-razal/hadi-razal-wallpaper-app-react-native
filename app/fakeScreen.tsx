import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const fakeScreen = () => {
    return (
        <View>
            <Text>fakeScreen</Text>
            <Link rel="stylesheet" href="/testScreen" >Firsst</Link>

        </View>
    )
}

export default fakeScreen

const styles = StyleSheet.create({})
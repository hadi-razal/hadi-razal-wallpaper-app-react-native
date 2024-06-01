import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const testScreen = () => {
    return (
        <View>
            <Text>testScreen</Text>
            <Link rel="stylesheet" href="/fakeScreen" />
        </View>
    )
}

export default testScreen
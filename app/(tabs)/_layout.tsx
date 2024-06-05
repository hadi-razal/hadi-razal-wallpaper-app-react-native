import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import {  StyleSheet, View } from 'react-native';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,

      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <View style={styles.tabBarItem}>
              <Ionicons name='home' size={27} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          tabBarLabel: '', // Hide the tab label
          tabBarIcon: ({ color }) => (
            <View style={styles.tabBarItem}>
              <Ionicons name='search' size={27} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='photos'
        options={{
          tabBarLabel: '', // Hide the tab label
          tabBarIcon: ({ color }) => (
            <View style={styles.tabBarItem}>
              <Ionicons name='albums' size={27} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: '', // Hide the tab label
          tabBarIcon: ({ color }) => (
            <View style={styles.tabBarItem}>
              <Ionicons name='person' size={27} color={color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#793BEC",
  },
  tabBar: {
    backgroundColor: "#793BEC",
    paddingTop: 20,
    height: 80,
    borderTopWidth: 0,
    borderRadius: 10,
    minHeight: 90,
    elevation: 0,
    marginHorizontal: 20,
    shadowOpacity: 0.5,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    position: "absolute",
    bottom: 30,
  },
  tabBarItem: {
    paddingTop: 10,
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
  },
});

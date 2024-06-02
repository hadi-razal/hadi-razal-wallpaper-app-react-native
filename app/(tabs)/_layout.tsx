import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        title: "",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#793BEC",
          borderTopWidth: 0,
          paddingVertical: 15,
          paddingTop: 10
        },
        tabBarShowLabel: true,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='home' size={27} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='search' size={27} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='photos'
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='albums' size={27} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name='person' size={27} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

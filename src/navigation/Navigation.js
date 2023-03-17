import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { AccountStack } from './AccountStack';
import { PokedexStack } from './PokedexStack';
import { FavoritesStack } from './FavoritesStack';


const Tab = createBottomTabNavigator();

export function Navigation() {
  return (
    <Tab.Navigator initialRouteName='PokedexStack' >
      <Tab.Screen
        name='AccountStack' component={AccountStack}
        options={{
          title: 'Account',
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'person-circle' : 'person-circle-outline'}
              size={size}
              color={color}
            />
          )
        }}
      />
      <Tab.Screen
        name='PokedexStack' component={PokedexStack}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => renderPokeball(focused)
        }}
      />
      <Tab.Screen
        name='FavoritesStack' component={FavoritesStack}
        options={{
          title: 'Favorites',
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons
              name={focused ? 'heart' : 'heart-outline' }
              size={size}
              color={color}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}


function renderPokeball(focused) {
  if (focused) {
    return (
      <Image
        source={require('../assets/pokeball.png')}
        style={{ width: 75, height: 75, top: -15 }}
      />
    )
  } else {
    return (
      <Image
        source={require('../assets/inactivePokeball.png')}
        style={{ width: 65, height: 65, top: -15 }}
      />
    )
  }
}
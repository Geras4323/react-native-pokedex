import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FavoritesScreen } from '../screens/FavoritesScreen';
import { PokemonScreen } from '../screens/PokemonScreen';


const Stack = createNativeStackNavigator();

export function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='FavoritesScreen'
        component={FavoritesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='PokemonScreen'
        component={PokemonScreen}
        options={{ title: '', headerTransparent: true }}
      />
    </Stack.Navigator>
  )
}
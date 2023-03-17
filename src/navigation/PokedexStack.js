import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PokedexScreen } from '../screens/PokedexScreen';
import { PokemonScreen } from '../screens/PokemonScreen';


const Stack = createNativeStackNavigator();

export function PokedexStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='PokedexScreen' component={PokedexScreen} options={{ headerShown: false }} />
      <Stack.Screen name='PokemonScreen' component={PokemonScreen} options={{ title: '', headerTransparent: true }} />
    </Stack.Navigator>
  )
}
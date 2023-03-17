import React from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { capitalize } from 'lodash';

import { getColorByPokemonType } from '../utils/getColorByPokemonType';


export function PokemonCard({ pokemonData }) {
  const navigation = useNavigation();

  function goToPokemon() {
    navigation.navigate('PokemonScreen', { id: pokemonData.id });
  }

  const bgStyle = {
    backgroundColor: getColorByPokemonType(pokemonData.type),
    ...styles.bgStyle,
  }

  return (
    <TouchableHighlight onPress={goToPokemon} underlayColor={null} style={styles.card}>
      <View style={styles.spacing}>
        <View style={bgStyle}>
          <Text style={styles.number}>{`#${pokemonData.order}`}</Text>
          <Text style={styles.name}>{capitalize(pokemonData.name)}</Text>
          <Image source={{ uri: pokemonData.image }} style={styles.image} />
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyle: {
    flex: 1,
    borderRadius: 16,
    padding: 10,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
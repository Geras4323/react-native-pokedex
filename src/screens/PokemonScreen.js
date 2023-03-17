import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { POKEMON_HOST } from '@env';
import { retrieveInfoApi } from '../api/retrieveInfo';
import { Header } from '../components/Pokemon/Header';
import { Type } from '../components/Pokemon/Type';
import { Stats } from '../components/Pokemon/Stats';
import { Favorite } from '../components/Pokemon/Favorite';
import { AuthContext } from '../context/AuthContext';


export function PokemonScreen({ navigation, route }) {
  const pokemonId = route.params.id;
  const [pokemon, setPokemon] = React.useState(null);
  const { auth } = React.useContext(AuthContext);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemonId} />,
      headerLeft: () => (
        <Ionicons
          name='caret-back'
          color='#fff'
          size={30}
          style={{ marginLeft: 10 }}
          onPress={() => navigation.goBack()}
        />
      ),
    })
  }, [navigation, route, auth])

  React.useEffect(() => {
    (async () => {
      try {
        const response = await retrieveInfoApi(`${POKEMON_HOST}/pokemon/${pokemonId}`);
        setPokemon(response);
      } catch (error) {
        // console.log(error);
        navigation.goBack();
      }
    })()
  }, [route.params])


  if (!pokemon) return null;

  return (
    <ScrollView style={styles.area}>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        type={pokemon.types[0].type.name}
        image={pokemon.sprites.other['official-artwork'].front_default}
      />
      <Type
        types={pokemon.types}
      />
      <Stats
        stats={pokemon.stats}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  // area: {
  //   height: 600,
  // }
})
import React from 'react';
import { SafeAreaView, Platform, StyleSheet } from 'react-native';

import { POKEMON_HOST } from '@env';
import { retrieveInfoApi } from '../api/retrieveInfo';
import { PokemonList } from '../components/PokemonList';


export function PokedexScreen() {
  const [pokemons, setPokemons] = React.useState([]);
  const [nextUrl, setNextUrl] = React.useState(null);


  async function loadPokemons(url) {
    const { results, next } = await retrieveInfoApi(url);
    const pokemonArray = [];
    for await (const pokemon of results) {
      const info = await retrieveInfoApi(pokemon.url);
      pokemonArray.push({
        id: info.id,
        name: info.name,
        type: info.types[0].type.name,
        order: info.order,
        image: info.sprites.other['official-artwork'].front_default,
      });
    }
    setPokemons([...pokemons, ...pokemonArray]);
    setNextUrl(next);
  }


  React.useEffect(() => {
    (async () => {
      loadPokemons(`${POKEMON_HOST}/pokemon?limit=20&offset=0`);
    })()
  }, [])


  return (
    <SafeAreaView style={styles.androidSafeArea}>
      <PokemonList pokemonList={pokemons} loadPokemons={loadPokemons} nextUrl={nextUrl} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  }
})
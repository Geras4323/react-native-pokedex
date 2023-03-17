import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, SafeAreaView } from 'react-native';

import { POKEMON_HOST } from '@env';
import { getAllFavoritePokemons } from '../api/favoriteStorage';
import { AuthContext } from '../context/AuthContext';
import { retrieveInfoApi } from '../api/retrieveInfo';
import { PokemonList } from '../components/PokemonList';
import { NotLogged } from '../components/NotLogged';


export function FavoritesScreen() {
  const [favsPokemons, setFavPokemons] = React.useState([]);
  const { auth } = React.useContext(AuthContext);


  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        if (auth) {
          const response = await getAllFavoritePokemons();

          const favPokemonArray = [];
          for await (const pokemonId of response) {
            const info = await retrieveInfoApi(`${POKEMON_HOST}/pokemon/${pokemonId}`);
            favPokemonArray.push({
              id: info.id,
              name: info.name,
              type: info.types[0].type.name,
              order: info.order,
              image: info.sprites.other['official-artwork'].front_default,
            });
          }
          setFavPokemons(favPokemonArray);
        }
      })();
    }, [auth])
  );


  return (
    <SafeAreaView style={styles.androidSafeArea}>
      {auth
        ? <PokemonList  pokemonList={favsPokemons} />
        : <NotLogged />
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  androidSafeArea: {
    paddingTop: Platform.OS === 'android' ? 10 : 0,
  }
});
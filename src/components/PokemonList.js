import React from 'react';
import { StyleSheet, FlatList, ActivityIndicator } from 'react-native';

import { PokemonCard } from './PokemonCard';


export function PokemonList({ pokemonList, loadPokemons, nextUrl }) {

  function loadMore() {
    if (nextUrl) {
      loadPokemons(nextUrl);
    }
  }

  return (
    <FlatList
      data={pokemonList}
      renderItem={({ item }) => <PokemonCard pokemonData={item} />}
      keyExtractor={item => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.flatlistContiner}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        nextUrl && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  flatlistContiner: {
    paddingHorizontal: 5,
  },
  spinner: {
    marginTop: 20,
    marginBottom: 60,
  }
})
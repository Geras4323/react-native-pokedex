import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  isPokemonFavorite,
  getAllFavoritePokemons,
  addPokemonToFavorites,
  removePokemonFromFavorites,
} from '../../api/favoriteStorage';


export function Favorite({ id }) {
  const [isFavorite, setIsFavorite] = React.useState();

  React.useEffect(() => {
    (async () => {
      const isFav = await isPokemonFavorite(id);
      setIsFavorite(isFav);
    })();
  }, [id])

  async function addToFavorites() {
    await addPokemonToFavorites(id);
    setIsFavorite(true);
  }

  async function removeFromFavorites() {
    await removePokemonFromFavorites(id);
    setIsFavorite(false);
  }

  return (
    <Ionicons
      name={isFavorite ? 'heart' : 'heart-outline'}
      color='#fff'
      size={30}
      onPress={isFavorite ? removeFromFavorites : addToFavorites}
      style={{ marginRight: 20 }}
    />
  )
}
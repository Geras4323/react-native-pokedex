import AsyncStorage from "@react-native-async-storage/async-storage";
import { pull } from "lodash";

import { FAVORITE_STORAGE } from '@env';


export async function isPokemonFavorite(id) {
  try {
    const response = await getAllFavoritePokemons();
    return response.includes(id);
  } catch (err) {
    throw err;
  }
}

export async function getAllFavoritePokemons() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || []);
  } catch (err) {
    throw err;
  }
}

export async function addPokemonToFavorites(id) {
  try {
    const pokemonList = await getAllFavoritePokemons();
    if (pokemonList) {
      pokemonList.push(id);
      await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(pokemonList));
    }
  } catch (err) {
    throw err;
  }
}

export async function removePokemonFromFavorites(id) {
  try {
    const favorites = await getAllFavoritePokemons();
    const newFavorites = pull(favorites, id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites));
  } catch (err) {
    throw err;
  }
}
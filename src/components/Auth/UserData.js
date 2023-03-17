import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { AuthContext } from '../../context/AuthContext';
import { getAllFavoritePokemons } from '../../api/favoriteStorage';


function ItemMenu({ title, text }) {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{`${title}:`}</Text>
      <Text>{text}</Text>
    </View>
  )
}

export function UserData() {
  const { auth, logout } = React.useContext(AuthContext);
  const [totalFavs, setTotalFavs] = React.useState(0);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const favs = await getAllFavoritePokemons();
        setTotalFavs(favs.length);
      })()
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={{...styles.title, color: '#555'}}>Welcome</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu
          title='Name'
          text={`${auth.firstName} ${auth.lastName}`}
        />
        <ItemMenu
          title='Username'
          text={auth.username}
        />
        <ItemMenu
          title='Email'
          text={auth.email}
        />
        <ItemMenu
          title='Total Favorites'
          text={`${totalFavs} Pokemons`}
        />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            title='Log out'
            onPress={logout}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  itemMenu: {
    paddingVertical: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#CFCFCF'
  },
  itemMenuTitle: {
    width: 120,
    fontWeight: 'bold',
    paddingRight: 10,
  },

  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: '50%',
  }
})
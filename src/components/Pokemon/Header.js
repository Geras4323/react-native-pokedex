import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image } from 'react-native';
import { capitalize } from 'lodash';

import { getColorByPokemonType } from '../../utils/getColorByPokemonType';


export function Header({ name, order, image, type }) {
  const bgStyle = {
    backgroundColor: getColorByPokemonType(type),
    ...styles.bg,
  }

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content} >
        <View style={styles.header} >
          <Text style={styles.name} >{capitalize(name)}</Text>
          <Text style={styles.order} >{`#${order}`}</Text>
        </View>
        <View style={styles.contentImg} >
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});
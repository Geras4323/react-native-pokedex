import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { capitalize } from 'lodash';

import { getColorByPokemonType } from '../../utils/getColorByPokemonType';


export function Type({ types }) {
  return (
    <View style={styles.content}>
      {types.map((item, index) => (
        <View key={index} style={{
            backgroundColor: getColorByPokemonType(item.type.name),
            ...styles.pill,
          }}
        >
          <Text>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  }
})
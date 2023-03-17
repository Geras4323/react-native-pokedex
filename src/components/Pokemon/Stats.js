import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { capitalize } from 'lodash';


export function Stats({ stats }) {

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockBar}>
            <Text style={styles.barNumber}>{item.base_stat}</Text>
            <View style={styles.barBg}>
              <View style={{
                ...styles.barFill,
                width: `${item.base_stat}%`,
                backgroundColor: item.base_stat > 49 ? '#00AC17' : '#FF3E3E',
              }}/>
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 60
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  blockTitle: {
    width: '30%',
  },
  statName: {
    color: '#444444',
    fontSize: 14,
  },
  blockBar: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  barNumber: {
    width: '12%',
    fontSize: 14,
  },
  barBg: {
    width: '88%',
    height: 8,
    backgroundColor: '#DEDEDE',
    borderRadius: 20,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 20,
  }
})
import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function NotLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>You have to be logged in in order to see this content</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title='Go to login' onPress={() => navigation.navigate('AccountStack')} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: '50%'
  }
})
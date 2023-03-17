import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { LoginForm } from '../components/Auth/LoginForm';
import { UserData } from '../components/Auth/UserData';
import { AuthContext } from '../context/AuthContext';


export function AccountScreen() {
  const { auth } = React.useContext(AuthContext);

  return (
    <View>
      {auth ? <UserData /> : <LoginForm />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
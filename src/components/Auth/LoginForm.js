import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { user, userDetails } from '../../utils/userDB';
import { AuthContext } from '../../context/AuthContext';


export function LoginForm() {
  const [logError, setLogError] = React.useState("");
  const { login } = React.useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required('El usuario es obligatorio'),
      password: Yup.string().required('La contraseña es obligatoria'),
    }),
    onSubmit: ({ username, password }) => {
      setLogError("");
      if (username !== user.username || password !== user.password) {
        setLogError('Incorrect data');
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Log in</Text>
      <TextInput
        placeholder='Username'
        autoCapitalize='none'
        style={styles.input}
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder='Password'
        autoCapitalize='none'
        secureTextEntry={true}
        style={styles.input}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <View style={styles.button}>
        <Button
          title='Submit'
          onPress={formik.handleSubmit}
        />
      </View>

      {formik.errors.username &&
        <Text style={styles.error}>{formik.errors.username}</Text>
      }
      {formik.errors.password &&
        <Text style={styles.error}>{formik.errors.password}</Text>
      }

      {logError &&
        <Text style={styles.error}>{logError}</Text>
      }
    </View>
    )
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    width: '50%',
    marginTop: 12,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20,
  }
})
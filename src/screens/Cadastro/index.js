import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  CustomButton,
  ButtonText,
  Container,
  Htext,
} from './styles';

export default function Cadastro() {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const voltar = () => {
    navigation.navigate('Login');
  };

  const handleCadastro = () => {
    if (login === '' || senha === '' || confirmarSenha === '') {
      Alert.alert('Campos obrigatórios', 'Preencha todos os campos.');
    } else if (senha !== confirmarSenha) {
      Alert.alert('Senhas não correspondem', 'As senhas não são iguais.');
    } else {
      //aq colocar a funcao de cadastro
    }
  };

  return (
    <Container>
      <Htext>Cadastro</Htext>
      <TextInput
        style={styles.input}
        placeholder="Login"
        value={login}
        onChangeText={(text) => setLogin(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={confirmarSenha}
        onChangeText={(text) => setConfirmarSenha(text)}
      />
      <CustomButton onPress={handleCadastro}>
        <ButtonText>Cadastrar</ButtonText>
      </CustomButton>
      <CustomButton onPress={voltar}>
        <ButtonText>Voltar</ButtonText>
      </CustomButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, onfocus } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Svg, Circle } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  CustomButton,
  CustomButton2,
  StyledInput,
  Ctext,
  Ptext,
  ButtonText,
  SairButton,
  Htext,
  StyledView
} from './styles';

export default function App() {
  const navigation = useNavigation();

  const isFocused = useIsFocused();

  function clearandgoToInputScreen() {
    AsyncStorage.removeItem('id');
    navigation.reset({
      routes: [{ name: 'LoginStack' }]
    });
  }


  const [savedText, setSavedText] = useState('');

  useEffect(() => {
    const getSavedText = async () => {
      try {
        const text = await AsyncStorage.getItem('id');
        if (text !== null) {
          setSavedText(text);
        }
      } catch (error) {
        console.error('Erro ao recuperar o texto:', error);
      }
    };

    getSavedText();
  }, [isFocused]);

  return (
    <StyledView>
      <Icon name="user" size={50} color="#000" />
      <Htext>Perfil</Htext>
      <Svg height="150" width="150">
        <Circle cx="75" cy="75" r="67.5" fill="white" />
      </Svg>
      <Ctext>Nome: {savedText}</Ctext>
      <Ctext>DD/MM/YYYY</Ctext>
      <Ctext>Email@Email.com</Ctext>
      <Ctext>Telefone: (00) 00000-0000</Ctext>
      <SairButton onPress={clearandgoToInputScreen}>
        <ButtonText>Sair</ButtonText>
      </SairButton>
    </StyledView>
  );
}




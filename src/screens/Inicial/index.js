import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import {
    CustomButton,
    ButtonText,
    Container,
    Htext,
    StyledView
} from './styles';


export default function App() {
    const navigation = useNavigation();
    
    const voltar = () => {
        navigation.navigate('Perfil');
    }

    return (
        <StyledView>
            <Htext>Seja bem vindo!</Htext>
            <CustomButton onPress={voltar}>
                <ButtonText>Entrar</ButtonText>
            </CustomButton>
            {/* nao usar essa tela */}
        </StyledView>
    );
}




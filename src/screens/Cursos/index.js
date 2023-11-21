import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    CustomButton,
    ButtonText,
    Container,
    Htext,
    StyledView,
    CustomButton1
} from './styles';


export default function App() {
    const navigation = useNavigation();
    
    const voltar = () => {
        AsyncStorage.removeItem('id');
        navigation.navigate('LoginStack');
    }

    return (
        <StyledView>
            <Icon name="book" size={50} color="#000" />
            <Htext>Cursos</Htext>
            <CustomButton1>
                <ButtonText>Curso 1</ButtonText>
            </CustomButton1>
            <CustomButton1>
                <ButtonText>Curso 2</ButtonText>
            </CustomButton1>
            <CustomButton1>
                <ButtonText>Curso 3</ButtonText>
            </CustomButton1>
            <CustomButton1>
                <ButtonText>Curso 4</ButtonText>
            </CustomButton1>
            <CustomButton1>
                <ButtonText>Curso 5</ButtonText>
            </CustomButton1>
            <CustomButton1>
                <ButtonText>Curso 6</ButtonText>
            </CustomButton1>
            <CustomButton1>
                <ButtonText>Curso 7</ButtonText>
            </CustomButton1>
            <CustomButton1>
                <ButtonText>Curso 8</ButtonText>
            </CustomButton1>
            <CustomButton1>
                <ButtonText>Curso 9</ButtonText>
            </CustomButton1>

        </StyledView>
    );
}




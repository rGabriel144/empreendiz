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
    CustomButton1,
    ScrollView
} from './styles';


export default function App() {
    const navigation = useNavigation();
    
    const voltar = () => {
        AsyncStorage.removeItem('id');
        navigation.navigate('LoginStack');
    }

    return (
        <ScrollView>
            <StyledView>
                <Icon name="book" size={50} color="#000" />
                <Htext>Curso 1</Htext>
                <Text style={{color: '#FFF', fontSize: 20, marginBottom: 10}}>Aula 1</Text>
                <CustomButton1>
                    <ButtonText>Assistir</ButtonText>
                </CustomButton1>
            </StyledView>
        </ScrollView>
    );
}




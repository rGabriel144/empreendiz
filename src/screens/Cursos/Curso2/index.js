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
    ScrollView,
    ButtonView
} from './styles';


export default function App() {
    const navigation = useNavigation();
    
    const voltar = () => {
        navigation.goBack();
    }

    return (
        <ScrollView>
            <StyledView>
                <ButtonView>
                    <Icon name="arrow-left" size={30} color="#000" onPress={voltar} style={{position: 'absolute', left: 10, top: 10}} />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="book" size={50} color="#000" />
                    </View>
                </ButtonView>
                <Htext>Curso 2</Htext>
                <Text style={{color: '#FFF', fontSize: 20, marginBottom: 10}}>Aula 1</Text>
                <CustomButton1>
                    <ButtonText>Assistir</ButtonText>
                </CustomButton1>
            </StyledView>
        </ScrollView>
    );
}




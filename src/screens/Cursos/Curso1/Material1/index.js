import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Linking, TouchableOpacity } from 'react-native';
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
import colors from '../../../../components/color.js';
import { HtextT } from '../Curso1B/styles.js';

const colorfont = colors.fonte;

export default function App() {
    const navigation = useNavigation();

    const voltar = () => {
        navigation.goBack();
    }

    const abrirDocumento = () => {
        alert('Abrir documento');
    }
    return (
        <ScrollView>
            <StyledView>
                <ButtonView>
                    <Icon name="arrow-left" size={30} color={colorfont} onPress={voltar} style={{ position: 'absolute', left: 10, top: 10 }} />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="book" size={50} color={colorfont} />
                    </View>
                </ButtonView>
                <Htext>Gestão de Projetos</Htext>
                <CustomButton>
                    <Icon name="file" size={120} color={'#fff'} />
                    <ButtonText>Material Aula 1</ButtonText>
                </CustomButton>
                <CustomButton>
                    <Icon name="file" size={120} color={'#fff'} />
                    <ButtonText>Material Aula 2</ButtonText>
                </CustomButton>
                <CustomButton>
                    <Icon name="file" size={120} color={'#fff'} />
                    <ButtonText>Material Aula 3</ButtonText>
                </CustomButton>
            </StyledView>
        </ScrollView>
    );
}




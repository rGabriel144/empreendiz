import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {
    CustomButton,
    ButtonText,
    Container,
    Htext,
    StyledView,
    CustomButton1,
    ScrollView
} from './styles';
import colors from '../../components/color.js';

const colorfont = colors.fonte;


export default function App() {
    const navigation = useNavigation();
    
    const voltar = () => {
        AsyncStorage.removeItem('id');
        navigation.navigate('LoginStack');
    }

    return (
        <ScrollView>
            <StyledView>
                <Icon name="gamepad" size={50} color={colorfont} />
                <Htext>Quiz</Htext>
                <CustomButton1 onPress={() => navigation.navigate('Quiz1B')}>
                    <ButtonText>Gestão de Projetos Básico</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz1I')}>
                    <ButtonText>Gestão de Projetos Intermediário</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz1A')}>
                    <ButtonText>Gestão de Projetos Avançado</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz2B')}>
                    <ButtonText>Finanças Empresariais Básico</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz2I')}>
                    <ButtonText>Finanças Empresariais Intermediário</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz2A')}>
                    <ButtonText>Finanças Empresariais Avançado</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Recursos Humanos</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Marketing e Vendas</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Gestão da Qualidade</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Gestão da Inovação</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Gestão de Equipes</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Gestão de Mudanças</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Ética nos Negócios</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Transformação Digital</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Curso 11</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Curso 12</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Curso 13</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Curso 14</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Curso 15</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Curso 16</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <ButtonText>Curso 17</ButtonText>
                </CustomButton1>
            </StyledView>
        </ScrollView>
    );
}




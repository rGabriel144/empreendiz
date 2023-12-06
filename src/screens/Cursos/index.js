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
                <Htext>Cursos</Htext>
                <CustomButton1 onPress={() => navigation.navigate('Curso1')}>
                    <ButtonText>Gestão de Projetos</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Curso2')}>
                    <ButtonText>Finanças Empresariais</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Curso3')}>
                    <ButtonText>Recursos Humanos</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Curso4')}>
                    <ButtonText>Marketing e Vendas</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Curso5')}>
                    <ButtonText>Gestão da Qualidade</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Curso6')}>
                    <ButtonText>Gestão da Inovação</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Curso7')}>
                    <ButtonText>Gestão de Equipes</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Curso8')}>
                    <ButtonText>Gestão de Mudanças</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Curso9')}>
                    <ButtonText>Ética nos Negócios</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Curso10')}>
                    <ButtonText>Transformação Digital</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Curso11')}>
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




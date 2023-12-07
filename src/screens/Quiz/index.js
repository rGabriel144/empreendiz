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


export default function App() {
    const navigation = useNavigation();
    
    const voltar = () => {
        AsyncStorage.removeItem('id');
        navigation.navigate('LoginStack');
    }

    return (
        <ScrollView>
            <StyledView>
                <Icon name="gamepad" size={50} color="#000" />
                <Htext>Quiz</Htext>
                <CustomButton1 onPress={() => navigation.navigate('Quiz1')}>
                    <Icon name="check" size={40} color="#fff" />
                    <ButtonText>Gestão de Projetos</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz2')}>
                    <Icon name="spinner" size={30} color="#fff" />
                    <ButtonText>Finanças Empresariais</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz3')}>
                    <Icon name="star" size={30} color="#fff" />
                    <ButtonText>Recursos Humanos</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <Icon name="star-o" size={30} color="#fff" />
                    <ButtonText>Marketing e Vendas</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <Icon name="star-half-empty" size={30} color="#fff" />
                    <ButtonText>Gestão da Qualidade</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <Icon name="battery" size={30} color="#fff" />
                    <ButtonText>Gestão da Inovação</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <Icon name="battery-half" size={30} color="#fff" />
                    <ButtonText>Gestão de Equipes</ButtonText>
                </CustomButton1>
                <CustomButton1>
                    <Icon name="battery-empty" size={30} color="#fff" />
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




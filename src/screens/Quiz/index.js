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
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Gestão de Projetos Básico</ButtonText>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz1I')}>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Gestão de Projetos Intermediário</ButtonText>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz1A')}>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Gestão de Projetos Avançado</ButtonText>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz2B')}>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Finanças Empresariais Básico</ButtonText>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz2I')}>
                    <Icon name="check-circle" size={40} color={'#FFF'} />
                    <ButtonText>Finanças Empresariais Intermediário</ButtonText>
                    <Icon name="check-circle" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz2A')}>
                    <Icon name="check-circle" size={40} color={'#FFF'} />
                    <ButtonText>Finanças Empresariais Avançado</ButtonText>
                    <Icon name="check-circle" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz3B')}>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Recursos Humanos Básico</ButtonText>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz3I')}>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Recursos Humanos Intermediário</ButtonText>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Quiz3A')}>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Recursos Humanos Avançado</ButtonText>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Marketing e Vendas</ButtonText>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Gestão da Qualidade</ButtonText>    
                    <Icon name="unlock" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Gestão da Inovação</ButtonText>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Gestão de Equipes</ButtonText>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Gestão de Mudanças</ButtonText>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Ética nos Negócios</ButtonText>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                </CustomButton1>
                <CustomButton1>
                    <Icon name="unlock" size={40} color={'#FFF'} />
                    <ButtonText>Transformação Digital</ButtonText>
                    <Icon name="unlock" size={40} color={'#FFF'} />
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




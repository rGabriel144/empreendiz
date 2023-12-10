import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
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
    AdminArea
} from './styles';
import colors from '../../components/color.js';

const colorfont = colors.fonte;


export default function App() {
    const navigation = useNavigation();

    const voltar = () => {
        AsyncStorage.removeItem('id');
        navigation.navigate('LoginStack');
    }

    const mensagem = () => {
        Alert.alert(
            'Aviso',
            'Esta tela será semelhante à tela de editar nome.',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed')
                }
            ],
            { cancelable: false }
        );
    };

    return (
        <StyledView>
            <Icon name="cog" size={50} color={colorfont} />
            <Htext>Configurações</Htext>
            <CustomButton1 onPress={() => navigation.navigate('EditarNome')}>
                <ButtonText>Editar nome</ButtonText>
            </CustomButton1>
            <CustomButton1 onPress={mensagem}>
                <ButtonText>Editar e-mail</ButtonText>
            </CustomButton1>
            <CustomButton1 onPress={mensagem}>
                <ButtonText>Editar telefone</ButtonText>
            </CustomButton1>
            <CustomButton1>
                <ButtonText>Lorem ipsum eget orci cursus pellentesque</ButtonText>
            </CustomButton1>
            <CustomButton1>
                <ButtonText>Lorem Ipsum aliquet mattis ornare</ButtonText>
            </CustomButton1>
            <AdminArea>
                <Text style={{ fontSize: 30, color: '#000' }}>Área do Administrador</Text>
                <Text style={{ fontSize: 10, color: '#000' }}>Apenas exemplo, será visivel apenas para o administrador</Text>
                <CustomButton1 onPress={() => navigation.navigate('Admin')}>
                    <ButtonText>Acessar</ButtonText>
                </CustomButton1>
            </AdminArea>
            <CustomButton onPress={voltar}>
                <ButtonText>Sair</ButtonText>
            </CustomButton>
        </StyledView>
    );
}




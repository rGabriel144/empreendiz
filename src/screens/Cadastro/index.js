import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    CustomButton,
    ButtonText,
    LoginContainer,
    Drawerbutton,
    Container,
    Input,
    LoginButton,
    TextIcon,
    FPasswordButton,
    ButtonText2,
    IconLogin,
    ButtonIcon,
    Htext
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../../components/color.js';

const colorfont = colors.fonte;


export default function App() {
    const navigation = useNavigation();

    const cadastro = () => {
        Alert.alert(
            'Sucesso',
            'Conta criada com sucesso!',
            [
                {
                    text: 'OK',
                    onPress: () => navigation.navigate('Login'),
                },
            ]
        );
    }

    const voltar = () => {
        navigation.goBack();
    }

    return (
        <Container>
            <LoginContainer>
            <Icon name="arrow-left" size={50} color={'#FFF'} onPress={voltar} style={{ position: 'absolute', left: 30, top: 40 }} />
                <Image
                    source={require('../../img/logo.png')} 
                    style={{ width: 210, height: 200, marginTop: '0%', marginBottom: '10%'}} 
                />
                <Htext>Cadastro</Htext>
                <Input
                    placeholder="Nome"
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry
                />
                <Input
                    placeholder="Confirmar senha"
                    secureTextEntry
                />
                <Input
                    placeholder="Email"
                />
                <Input
                    placeholder="Telefone"
                />
                <LoginButton onPress={cadastro}>
                    <ButtonText>Criar conta</ButtonText>
                </LoginButton>
            </LoginContainer>
        </Container>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
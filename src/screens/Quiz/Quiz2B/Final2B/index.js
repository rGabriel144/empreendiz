import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, onfocus } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
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
    PerguntaText,
    RespostaButton,
    RespostaButtonText,
    AlternativaContainer,
    AlternativaItem,
    ButtonView,
    H1text,
    PerguntaV
} from './styles';
import colors from '../../../../components/color.js';

const colorfont = colors.fonte;
const colorbutton = colors.botao;


export default function App() {
    const navigation = useNavigation();


    const voltar = () => {
        AsyncStorage.removeItem('pontos');
        navigation.navigate('Quiz');
    };


    const isFocused = useIsFocused();
    const [savedText, setSavedText] = useState(0);

    useEffect(() => {
        const getSavedText = async () => {
            try {
                const text = await AsyncStorage.getItem('pontos');
                if (text !== null) {
                    setSavedText(parseInt(text, 10));
                }
            } catch (error) {
                console.error('Error retrieving points:', error);
            }
        };

        getSavedText();
    }, [isFocused]);



    return (
        <StyledView>
            <ButtonView>
                <Icon name="arrow-left" size={30} color={colorfont} onPress={voltar} style={{ position: 'absolute', left: 10, top: 10 }} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="gamepad" size={50} color={colorfont} />
                </View>
            </ButtonView>
            <Htext>Quiz</Htext>
            <H1text>Finanças Empresariais</H1text>
            <H1text>Básico</H1text>
            <PerguntaV>
                <H1text>Quiz Concluido</H1text>
                <H1text>Você acertou {savedText} de 3</H1text>
                {savedText === 3 && (
                    <H1text style={{ color: 'green',  textAlign: 'center'}}>Parabéns! Você acertou todas as perguntas!</H1text>
                )}
            </PerguntaV>
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '60%', alignItems: 'center' }}>
                <CustomButton onPress={voltar}>
                    <ButtonText>
                        FIM
                    </ButtonText>
                </CustomButton>
            </View>
        </StyledView>
    );
}
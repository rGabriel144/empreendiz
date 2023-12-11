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
    PerguntaText,
    RespostaButton,
    RespostaButtonText,
    AlternativaContainer,
    AlternativaItem,
    ButtonView,
    H1text
} from './styles';
import colors from '../../../../components/color.js';

const colorfont = colors.fonte;
const colorbutton = colors.botao;

import { PerguntaV } from '../../../../components/Quiz';

export default function App() {
    const navigation = useNavigation();
    const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);
    const [respostax, setRespostax] = useState({
        index: null,
        isCorrect: null,
    });

    const respostas = ['Lucro antes de juros',
    'Receitas totais', 
    'Despesas operacionais', 
    'Lucro ajustado pela inflação'];

    const voltar = () => {
        navigation.navigate('Quiz');
    };

    const respostaCorreta = 0;

    const handleRespostaClick = (index) => {
        if (respostax.index === null) {
            const isCorrect = index === respostaCorreta;
            setRespostax({
                index,
                isCorrect,
            });
        }
        setAlternativaSelecionada(respostas[index]);
    };


    const adicionarPonto = async () => {
        try {
            const pontosString = await AsyncStorage.getItem('pontos');
            const pontosAtualizados = pontosString ? parseInt(pontosString, 10) + 1 : 1;
            await AsyncStorage.setItem('pontos', pontosAtualizados.toString());
            console.log(pontosAtualizados);
        } catch (error) {
            console.error(error);
        }
    };

    const proximapergunta = async () => {
        if (respostax.isCorrect) {
            await adicionarPonto();
            navigation.navigate('Final2B');
        } else {
            Alert.alert(
                'Resposta Incorreta',
                `A resposta correta é: ${respostas[respostaCorreta]}`,
                [
                    { text: 'Próxima Pergunta', onPress: () => navigation.navigate('Final2B') }
                ]
            );
        }
    };
    

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
            <PerguntaV
                pergunta="Significado de EBITDA?"
                respostas={[respostas[0], respostas[1], respostas[2], respostas[3]]}
                handleRespostaClick={handleRespostaClick}
                respostax={respostax}
                alternativaSelecionada={alternativaSelecionada}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '60%', alignItems: 'center' }}>
                <CustomButton
                    onPress={proximapergunta}
                    disabled={respostax.index === null} 
                    style={{
                        marginLeft: 10,
                        backgroundColor: respostax.index !== null ? colorbutton : '#ccc', 
                    }}
                >
                    <ButtonText style={{ color: respostax.index !== null ? '#fff' : '#666' }}>
                        Próximo
                    </ButtonText>
                </CustomButton>
            </View>
        </StyledView>
    );
}
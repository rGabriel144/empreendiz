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
    PerguntaV,
    PerguntaText,
    RespostaButton,
    RespostaButtonText,
    AlternativaContainer,
    AlternativaItem
} from './styles';


// App.js

// ... (import statements)

export default function App() {
    const navigation = useNavigation();
    const [respostax, setrespostax] = useState(null);


    const voltar = () => {
        navigation.navigate('Quiz1');
    }

    const respostas = [
        '5',
        '10',
        '0',
        '-84'
    ];

    const RespostaCorreta = 1;

    const handleRespostaClick = (index) => {
        setrespostax(index);
    };

    const checarResposta = () => {
        if (respostax === RespostaCorreta) {
            Alert.alert(
                'Resposta Correta',
                'Parabéns, você acertou!',
                [{ text: 'OK', onPress: () => navigation.navigate('Quiz2') }]
            );
        } else {
            Alert.alert(
                'Resposta Incorreta',
                'Por favor, tente novamente.',
                [{ text: 'OK'}]
            );
        }
    }
    const isRespostaCorretaClicada = respostax === RespostaCorreta;

    return (
            <StyledView>
                <Icon name="gamepad" size={50} color="#000" />
                <Htext>Quiz</Htext>
                <PerguntaV>
                    <PerguntaText>Quando é 5 + 5</PerguntaText>
                    <AlternativaContainer>
                        {respostas.map((respostas, index) => (
                            <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <AlternativaItem>{String.fromCharCode(65 + index)}</AlternativaItem>
                                <RespostaButton
                                    onPress={() => handleRespostaClick(index)}
                                    isSelected={respostax === index}
                                    style={{ backgroundColor: respostax === index ? '#000' : '#fff' }}
                                >
                                    <RespostaButtonText
                                        style={{ color: respostax === index ? '#fff' : '#000' }}
                                    >{respostas}</RespostaButtonText>
                                </RespostaButton>
                            </View>
                        ))}
                    </AlternativaContainer>
                    
                </PerguntaV>
                <CustomButton onPress={checarResposta}>
                    <ButtonText>Checar Resposta</ButtonText>
                </CustomButton>
            </StyledView>
    );
}




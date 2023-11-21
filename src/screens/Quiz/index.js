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
        setrespostax(null);
    }

    const respostas = [
        '3',
        '2',
        '-648',
        'Banana'
    ];

    const RespostaCorreta = 1;

    const handleRespostaClick = (index) => {
        setrespostax(index);
    };

    const isRespostaCorretaClicada = respostax === RespostaCorreta;

    return (
        <ScrollView>
            <StyledView>
                <Icon name="gamepad" size={50} color="#000" />
                <Htext>Quiz</Htext>
                <PerguntaV>
                    <PerguntaText>Quando é 1 + 1</PerguntaText>
                    <AlternativaContainer>
                        {respostas.map((respostas, index) => (
                            <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <AlternativaItem>{String.fromCharCode(65 + index)}</AlternativaItem>
                                <RespostaButton
                                    onPress={() => handleRespostaClick(index)}
                                    isSelected={respostax === index}
                                >
                                    <RespostaButtonText>{respostas}</RespostaButtonText>
                                </RespostaButton>
                            </View>
                        ))}
                    </AlternativaContainer>
                    
                </PerguntaV>
                {respostax !== null && isRespostaCorretaClicada && (
                        <CustomButton onPress={voltar}>
                            <ButtonText>Limpar</ButtonText>
                        </CustomButton>
                    )}
            </StyledView>
        </ScrollView>
    );
}





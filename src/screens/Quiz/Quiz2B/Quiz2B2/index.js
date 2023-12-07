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
    AlternativaItem,
    ButtonView
} from './styles';

export default function App() {
    const navigation = useNavigation();
    const [respostax, setRespostax] = useState(null);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState('');
    const [proximoDesativado, setProximoDesativado] = useState(true);


    const voltar = () => {
        navigation.goBack();
    }

    const respostas = ['Registro histórico', 'Previsão futura e controle', 'Distribuição de lucros'];
    const respostaCorreta = 1;

    const handleRespostaClick = (index) => {
        setRespostax(index);
    };

    const checarResposta = () => {
        if (respostax === respostaCorreta) {
            alert('Resposta Correta');
            setProximoDesativado(false);

        } else {
            alert('Resposta Incorreta');
            setProximoDesativado(true); 
        }
    };

    const proximapergunta = () => {
        navigation.navigate('Quiz23');
    }


    const isRespostaCorretaClicada = respostax === respostaCorreta;

    return (
        <StyledView>
            <ButtonView>
                    <Icon name="arrow-left" size={30} color="#000" onPress={voltar} style={{position: 'absolute', left: 10, top: 10}} />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="gamepad" size={50} color="#000" />
                    </View>
                </ButtonView>
            <Htext>Quiz</Htext>
            <PerguntaV>
                <PerguntaText>Qual é a principal finalidade do orçamento empresarial?</PerguntaText>
                <AlternativaContainer>
                    {respostas.map((resposta, index) => (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AlternativaItem>{String.fromCharCode(65 + index)}</AlternativaItem>
                            <RespostaButton
                                onPress={() => handleRespostaClick(index)}
                                isSelected={respostax === index}
                                style={{ backgroundColor: respostax === index ? '#000' : '#fff' }}
                            >
                                <RespostaButtonText
                                    style={{ color: respostax === index ? '#fff' : '#000' }}
                                >
                                    {resposta}
                                </RespostaButtonText>
                            </RespostaButton>
                        </View>
                    ))}
                </AlternativaContainer>
                {mostrarMensagem && (
                    <Text style={{ color: isRespostaCorretaClicada ? 'green' : 'red', fontSize: 18, marginTop: 10 }}>
                        {mensagem}
                    </Text>
                )}
            </PerguntaV>
            <View style={{ flexDirection: 'row', justifyContent: 'center', width: '60%', alignItems: 'center' }}>
                <CustomButton onPress={checarResposta}>
                    <ButtonText>Verificar</ButtonText>
                </CustomButton>
                <CustomButton onPress={proximapergunta} style={{ marginLeft: 10, backgroundColor: proximoDesativado ? '#888' : '#000' }} disabled={proximoDesativado}>
                    <ButtonText style={{ color: '#fff' }}>Proximo</ButtonText>
                </CustomButton>
            </View>
        </StyledView>
    );
}

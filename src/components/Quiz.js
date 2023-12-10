import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export const PView = styled.View`
	margin-top: 50px;
	flex: 1;
	justify-content: space-evenly;
	align-items: center;
	background-color: #FFF;
	padding: 20px;
	border-radius: 10px;
	width: 90%;
	max-width: 90%;
`;

export const PerguntaText = styled.Text`
	font-size: 20px;
	margin-bottom: 20px;
	text-align: center;
`;

export const RespostaButton = styled.TouchableOpacity`
	backgroundColor: '#3498db';
	padding: 10px;
	marginVertical: 5px;
	width: 200px;
	max-width: 180px;
	alignItems: center;
	justifyContent: center;
	borderRadius: 8px;
	borderWidth: 1px;

`;

export const RespostaButtonText = styled.Text`
	color: #000;
	fontSize: 16px;
	textAlign: center;
`;

export const AlternativaContainer = styled.View`
    flex-direction: column;
	align-items: center;
    width: 100%;
    margin-top: 20px;
`;

export const AlternativaItem = styled.Text`
    font-size: 18px;
	padding: 10px;
	marginVertical: 5px;
	alignItems: center;
	justifyContent: center;
	borderRadius: 8px;
	borderWidth: 1px;
	margin-right: 10px;
`;



export const PerguntaV = ({ pergunta, respostas, handleRespostaClick, respostax, alternativaSelecionada }) => (
    <PView>
        <PerguntaText>{pergunta}</PerguntaText>
        <AlternativaContainer>
            {respostas.map((resposta, index) => (
                <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AlternativaItem>{String.fromCharCode(65 + index)}</AlternativaItem>
                    <RespostaButton
                        onPress={() => handleRespostaClick(index)}
                        isSelected={respostax.index === index}
                        disabled={respostax.index !== null}
                        style={{
                            backgroundColor:
                                respostax.index === index
                                    ? respostax.isCorrect
                                        ? 'green'
                                        : 'red'
                                    : '#fff',
                        }}
                    >
                        <RespostaButtonText
                            style={{
                                color:
                                    respostax.index === index
                                        ? '#fff'
                                        : '#000',
                            }}
                        >
                            {resposta}
                        </RespostaButtonText>
                    </RespostaButton>
                </View>
            ))}
        </AlternativaContainer>
    </PView>
);

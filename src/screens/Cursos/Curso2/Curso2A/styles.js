import React from 'react';
import styled from 'styled-components/native';
import colors from '../../../../components/color.js';

export const StyledView = styled.SafeAreaView`
	flex: 1;
	padding-vertical: 10%;
	padding-horizontal: 5%;
	align-items: center;
	background-color: ${colors.fundo};
`;

export const CustomButton = styled.TouchableOpacity`
	width: 70%;
	max-width: 300px;
    background-color: #000;
	text-align: center;
    justify-content: center;
    align-items: center;
	padding: 10px;
	margin-top: 10px;
	border-radius: 10px;
`;

export const ButtonText = styled.Text`
	font-size: 25px;
	color: #FFF;
`;



export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export const Htext = styled.Text`
font-size: 40px;
color: ${colors.fonte};
margin-bottom: 10px;
font-weight: bold;
text-align: center;
`;

export const HtextT = styled.Text`
font-size: 40px;
color: ${colors.fonte};
margin-bottom: 10px;
`;

export const CustomButton1 = styled.TouchableOpacity`
width: 70%;
max-width: 300px;
background-color: ${colors.botao};
text-align: center;
justify-content: center;
align-items: center;
padding: 10px;
margin-top: 10px;
border-radius: 10px;
`;

export const ScrollView = styled.ScrollView`
background-color: ${colors.fundo};
`;

export const ButtonView = styled.View`
justify-content: center;
flex-direction: row;
align-items: center;
`;

export const TextoAula = styled.Text`
color: ${colors.fonte};
font-size: 20px;
margin-bottom: 10px;
text-align: center;
`;

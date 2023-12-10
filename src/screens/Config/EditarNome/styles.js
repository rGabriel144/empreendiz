import React from 'react';
import styled from 'styled-components/native';
import colors from '../../../components/color.js'

export const StyledView = styled.View`
	flex: 1;
	padding-vertical: 10%;
	padding-horizontal: 5%;
	align-items: center;
	background-color: ${colors.fundo};
`;

export const CustomButton = styled.TouchableOpacity`
	width: 80%;
	max-width: 400px;
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
	text-align: center;
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
`;

export const CustomButton1 = styled.TouchableOpacity`
width: 90%;
max-width: 400px;
background-color: ${colors.botao};
text-align: center;
justify-content: center;
align-items: center;
padding: 10px;
margin-top: 10px;
border-radius: 10px;
`;


export const AdminArea = styled.View`
width: 90%;
max-width: 400px;
background-color: #fff;
text-align: center;
justify-content: center;
align-items: center;
padding: 10px;
margin-top: 10px;
border-radius: 10px;
`;

export const ButtonView = styled.View`
justify-content: center;
flex-direction: row;
align-items: center;
`;

export const StyledInput = styled.TextInput`
width: 90%;
height: 40px;
border: 1px solid #ccc;
border-radius: 10px;
padding: 8px;
margin-bottom: 20px;
font-size: 18px;
`;
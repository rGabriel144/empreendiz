import React from 'react';
import styled from 'styled-components/native';

export const StyledView = styled.SafeAreaView`
	flex: 1;
	padding-vertical: 10%;
	padding-horizontal: 5%;
	align-items: center;
	background-color: #3178E4;
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
color: #000;
margin-bottom: 10px;
`;

export const CustomButton1 = styled.TouchableOpacity`
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

export const ScrollView = styled.ScrollView`
background-color: #3178E4;
`;

export const ButtonView = styled.View`
justify-content: center;
flex-direction: row;
align-items: center;
`;

export const TextoAula = styled.Text`
color: #FFF;
font-size: 20px;
margin-bottom: 10px;
text-align: center;
`;
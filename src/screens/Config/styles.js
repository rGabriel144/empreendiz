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
    background-color: #FF8899;
	text-align: center;
    justify-content: center;
    align-items: center;
	padding: 10px;
	margin-top: 10px;
`;

export const ButtonText = styled.Text`
	font-size: 16px;
	color: #FFF;
`;



export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export const Htext = styled.Text`
font-size: 20px;
color: #000;
`;

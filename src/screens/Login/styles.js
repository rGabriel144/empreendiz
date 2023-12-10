import React from 'react';
import styled from 'styled-components/native';
import colors from '../../components/color.js';

export const StyledView = styled.SafeAreaView`
	flex: 1;
	padding-vertical: 10%;
	padding-horizontal: 5%;
	align-items: center;
	background-color: black;
`;

export const LoginContainer = styled.View`
	flex: 1;
    backgroundColor: ${colors.fundo};
    alignItems: center;
    justifyContent: center;
    width: 100%;
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

export const ButtonText2 = styled.Text`
	font-size: 16px;
	color: #000;
	text-decoration: underline;
`;

export const Loading = styled.ActivityIndicator`
    margin-top: 15%;
`;

export const Drawerbutton = styled.TouchableOpacity`
	position: absolute;
	top: 5%;
	left: 5%;
	width: 50px;
	height: 50px;
	border-radius: 50px;
	background-color: #000;
`;

export const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

export const Input = styled.TextInput`
width: 80%;
height: 40px;
border: 1px solid #ccc;
border-radius: 10px;
padding: 8px;
margin-bottom: 20px;
`;

export const LoginButton = styled.TouchableOpacity`
	width: 100%;
	max-width: 200px;
    background-color: #000;
	text-align: center;
    justify-content: center;
    align-items: center;
	padding: 10px;
	margin-top: 10px;
`;

export const TextIcon = styled.Text`
font-size: 30px;
color: #FFF;
margin-top: 80px;
margin-bottom: 80px;
background-color: #000;
padding: 20px;
`;

export const ForgotPasswordButton = styled.Button`
  margin-top: 10px;
  color: black;
`;

export const FPasswordButton = styled.TouchableOpacity`
	width: 100%;
	max-width: 200px;
	text-align: center;
    justify-content: center;
    align-items: center;
	padding: 10px;
	margin-top: 10px;
`;

export const IconLogin = styled.View`
flex-direction: row;
margin-top: 20px;
align-items: center;
justify-content: center;
margin-left: 10%;
`;

export const ButtonIcon = styled.TouchableOpacity`
width: 20%;
max-width: 300px;
padding: 0px;
`;
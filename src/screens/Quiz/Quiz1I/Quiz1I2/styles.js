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
	padding: 15px;
	margin-top: 50px;
	margin-bottom: 20px;
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

export const PerguntaV = styled.View`
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

export const ButtonView = styled.View`
	justify-content: center;
	flex-direction: row;
	align-items: center;
`;
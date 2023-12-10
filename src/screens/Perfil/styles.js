import styled from 'styled-components/native';
import colors from '../../components/color.js'

export const CustomButton = styled.TouchableOpacity`
	width: 50%;
	margin-top: 30px;
	max-width: 300px;
    background-color: ${colors.botao};
	text-align: center;
    justify-content: center;
    align-items: center;
	padding: 10px;
`;

export const CustomButton2 = styled.TouchableOpacity`
	width: 50%;
	max-width: 300px;
    background-color: ${colors.botao};
	text-align: center;
    justify-content: center;
    align-items: center;
	padding: 10px;
	margin-top: 10px;
`;

export const SairButton = styled.TouchableOpacity`
	width: 80%;
	max-width: 400px;
    background-color: ${colors.botao};
	text-align: center;
    justify-content: center;
    align-items: center;
	padding: 10px;
	margin-top: 10px;
	border-radius: 10px;
`;

export const ButtonText = styled.Text`
	font-size: 30px;
	color: #FFF;
`;

export const StyledInput = styled.TextInput`
	background-color: #fff;
	width: 50%;
	border: 1px solid #000;
	border-radius: 10px;
	height: 50px;
	text-align: center;
	color: #FFF;
`;

export const Ptext = styled.Text`
	color: #000;
	font-size: 30px;
	margin-top: 0px;
`;

export const Ctext = styled.Text`
	color: ${colors.fonte};
	font-size: 20px;
	margin-top: 20px;
	border: 1px solid ${colors.fonte};
	border-radius: 10px;
	padding: 10px;
	width: 80%;
`;

export const ButtonView = styled.View`
	justify-content: center;
	flex-direction: row;
	align-items: center;
`;

export const Htext = styled.Text`
	font-size: 40px;
	color: ${colors.fonte};
	margin-bottom: 10px;
	font-weight: bold;
`;

export const StyledView = styled.View`
	flex: 1;
	padding-vertical: 10%;
	padding-horizontal: 5%;
	align-items: center;
	background-color: ${colors.fundo};
`;

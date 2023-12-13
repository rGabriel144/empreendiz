import React from 'react';
import { View, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyledView,
    ButtonView,
    Htext,
    CustomButton1,
    ButtonText,
    TextoAula,
    ScrollView
} from './styles';

export default function App() {
    const navigation = useNavigation();
    
    const voltar = () => {
        navigation.goBack();
    }

    const assistirVideo = () => {
        const youtubeUrl = `https://www.youtube.com/watch?v=ryISEgXkCac`;
        Linking.openURL(youtubeUrl);
    }

    return (
        <ScrollView>
            <StyledView>
                <ButtonView>
                    <Icon name="arrow-left" size={30} color="#000" onPress={voltar} style={{position: 'absolute', left: 10, top: 10}} />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="book" size={50} color="#000" />
                    </View>
                </ButtonView>
                <Htext>Marketing e Vendas</Htext>
                <Text style={{color: '#FFF', fontSize: 30, marginBottom: 10, color: '#000'}}>Aula 1</Text>
                <CustomButton1 onPress={assistirVideo}>
                    <ButtonText>Assistir</ButtonText>
                </CustomButton1>
                <Text style={{color: '#FFF', fontSize: 30, marginTop: 10, marginBottom: 10, color: '#000'}}>Aula 2</Text>
                <TextoAula>Entre no mundo do marketing empresarial, aprendendo estratégias de marketing, técnicas de vendas e a importância do marketing digital para expandir o alcance da sua empresa.</TextoAula>
                <CustomButton1 onPress={() => navigation.navigate('QuizTab', { screen: 'Quiz4' })}>
                    <ButtonText>Quiz</ButtonText>
                </CustomButton1>
            </StyledView>
        </ScrollView>
    );
}
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
        const youtubeUrl = `https://www.youtube.com/watch?v=dQw4w9WgXcQ`;
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
                <Htext>Finanças Empresariais</Htext>
                <Text style={{color: '#FFF', fontSize: 30, marginBottom: 10, color: '#000'}}>Aula 1</Text>
                <CustomButton1 onPress={assistirVideo}>
                    <ButtonText>Assistir</ButtonText>
                </CustomButton1>
                <Text style={{color: '#FFF', fontSize: 30, marginTop: 10, marginBottom: 10, color: '#000'}}>Aula 2</Text>
                <TextoAula>
                    Finanças são a espinha dorsal de qualquer negócio. Nesta aula, abordaremos conceitos-chave, desde contabilidade até análise financeira. Entenderemos o papel crucial do orçamento e como interpretar demonstrações financeiras para tomar decisões estratégicas informadas.
                </TextoAula>
                <CustomButton1 onPress={() => navigation.navigate('QuizTab', { screen: 'Quiz2' })}>
                    <ButtonText>Quiz</ButtonText>
                </CustomButton1>
            </StyledView>
        </ScrollView>
    );
}
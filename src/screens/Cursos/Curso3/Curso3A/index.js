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
    ScrollView,
    HtextT,
} from './styles';
import colors from '../../../../components/color.js';

const colorfont = colors.fonte;

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
                    <Icon name="arrow-left" size={30} color={colorfont} onPress={voltar} style={{position: 'absolute', left: 10, top: 10}} />
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name="book" size={50} color={colorfont} />
                    </View>
                </ButtonView>
                <Htext>Recursos Humanos</Htext>
                <HtextT>Avançado</HtextT>
                <TextoAula>
                    A teoria da Motivação-Higiene, desenvolvida por Frederick Herzberg, destaca a importância de fatores motivacionais e higiênicos para compreender a satisfação e insatisfação no trabalho. Diferente da opção que sugere que Motivação-Higiene não se relaciona com Recursos Humanos, a teoria é crucial para compreender como elementos motivacionais, como o reconhecimento, e fatores higiênicos, como as condições de trabalho, impactam o desempenho da equipe. 
                </TextoAula>
                <Text style={{color: colorfont, fontSize: 30, marginBottom: 10}}>Aula 1</Text>
                <CustomButton1 onPress={assistirVideo}>
                    <Icon name="play" size={30} color={'#fff'} />
                    <ButtonText>Assistir</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Material3')}>
                    <ButtonText>Material</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('QuizTab', { screen: 'Quiz3A' })}>
                    <ButtonText>Quiz</ButtonText>
                </CustomButton1>
            </StyledView>
        </ScrollView>
    );
}
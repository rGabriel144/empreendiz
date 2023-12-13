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
        const youtubeUrl = `https://www.youtube.com/watch?v=ryISEgXkCac`;
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
                <HtextT>Intermediário</HtextT>
                <TextoAula>
                    O papel fundamental da gestão de Recursos Humanos, destaca-se durante a fase de execução ao monitorar o progresso e desenvolver a equipe, proporcionando um ambiente propício para o alcance dos objetivos do projeto. Isso contrasta com opções que sugerem atribuir tarefas, elaborar cronograma ou estabelecer escopo, que não refletem o cerne da atuação nessa fase.
                </TextoAula>
                <Text style={{color: colorfont, fontSize: 30, marginBottom: 10}}>Aula 1</Text>
                <CustomButton1 onPress={assistirVideo}>
                    <Icon name="play" size={30} color={'#fff'} />
                    <ButtonText>Assistir</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('Material3')}>
                    <ButtonText>Material</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('QuizTab', { screen: 'Quiz3I' })}>
                    <ButtonText>Quiz</ButtonText>
                </CustomButton1>
            </StyledView>
        </ScrollView>
    );
}
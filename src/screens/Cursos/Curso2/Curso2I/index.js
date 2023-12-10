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
                <Htext>Gestão de Projetos</Htext>
                <HtextT>Intermediário</HtextT>
                <Text style={{color: colorfont, fontSize: 30, marginBottom: 10}}>Aula 1</Text>
                <CustomButton1 onPress={assistirVideo}>
                    <ButtonText>Assistir</ButtonText>
                </CustomButton1>
                <Text style={{color: colorfont, fontSize: 30, marginTop: 10, marginBottom: 10}}>Aula 2</Text>
                <TextoAula>
                    Na gestão de projetos, aprendemos a planejar, executar e monitorar atividades para atingir objetivos específicos. Metodologias ágeis, como Scrum, enfatizam a flexibilidade. Ferramentas como o Gantt e PERT ajudam a visualizar o progresso. Vamos explorar como garantir o sucesso de um projeto.    
                </TextoAula>
                <CustomButton1 onPress={() => navigation.navigate('MaterialTab', { screen: 'Material1' })}>
                    <ButtonText>Material</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('QuizTab', { screen: 'Quiz2I' })}>
                    <ButtonText>Quiz</ButtonText>
                </CustomButton1>
            </StyledView>
        </ScrollView>
    );
}
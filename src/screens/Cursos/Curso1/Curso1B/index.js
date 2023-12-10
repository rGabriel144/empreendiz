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
                <HtextT>Básico</HtextT>
                <Text style={{color: colorfont, fontSize: 30, marginBottom: 10}}>Aula 1</Text>
                <CustomButton1 onPress={assistirVideo}>
                    <Icon name="play" size={30} color={'#fff'} />
                    <ButtonText>Assistir</ButtonText>
                </CustomButton1>
                <Text style={{color: colorfont, fontSize: 30, marginTop: 10, marginBottom: 10}}>Aula 2</Text>
                <TextoAula>
                Gestão de Projetos é o processo de planejar, executar e controlar atividades para atingir metas dentro de prazos e orçamentos definidos. Envolve fases de definição de objetivos, implementação do plano e monitoramento do progresso. Metodologias como a tradicional (Cascata) e ágil oferecem abordagens distintas, enquanto ferramentas como EDT, Caminho Crítico e EVM são essenciais. Competências necessárias incluem liderança, comunicação eficaz e gestão de riscos. A gestão de projetos, presente em diversos setores, é adaptável às necessidades específicas de cada projeto.
                </TextoAula>
                <CustomButton1 onPress={() => navigation.navigate('Material1')}>
                    <ButtonText>Material</ButtonText>
                </CustomButton1>
                <CustomButton1 onPress={() => navigation.navigate('QuizTab', { screen: 'Quiz1B' })}>
                    <ButtonText>Quiz</ButtonText>
                </CustomButton1>
            </StyledView>
        </ScrollView>
    );
}
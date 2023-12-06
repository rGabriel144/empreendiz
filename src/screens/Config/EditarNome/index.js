import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    CustomButton,
    ButtonText,
    Container,
    Htext,
    StyledView,
    CustomButton1,
    ScrollView,
    AdminArea,
    ButtonView,
    StyledInput
} from './styles';


export default function App() {
    const navigation = useNavigation();
    const [Nomeditar, setNomeditar] = useState('');

    const voltar = () => {
        navigation.goBack();
    }


    const editar = async () => {
        try {
            await AsyncStorage.setItem('id', Nomeditar);
            navigation.reset({
                routes: [{ name: 'PerfilTab' }]
            });
        } catch (error) {
            console.error('Erro ao salvar o nome no AsyncStorage:', error);
        }
    }

    return (
        <StyledView>
            <ButtonView>
                <Icon name="arrow-left" size={30} color="#000" onPress={voltar} style={{ position: 'absolute', left: 10, top: 10 }} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="pencil" size={50} color="#000" />
                </View>
            </ButtonView>
            <Htext>Editar Nome</Htext>
                <StyledInput
                    placeholder="Nome"
                    placeholderTextColor="#000"
                    autoCorrect={false}
                    onChangeText={text => setNomeditar(text)}
                />
                <CustomButton1 onPress={editar}>
                    <ButtonText>Salvar</ButtonText>
                </CustomButton1>
        </StyledView>
    );
}




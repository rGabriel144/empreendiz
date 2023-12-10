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
    ButtonView
} from './styles';
import colors from '../../../components/color.js';

const colorfont = colors.fonte;

export default function App() {
    const navigation = useNavigation();

    const voltar = () => {
        navigation.goBack();
    }

    const limpar = () => {
        navigation.reset({
            routes: [{ name: 'MainTabs' }]
        });
    }

    return (
        <StyledView>
            <ButtonView>
                <Icon name="arrow-left" size={30} color={colorfont} onPress={voltar} style={{ position: 'absolute', left: 10, top: 10 }} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="cog" size={50} color={colorfont} />
                </View>
            </ButtonView>
            <Htext>Configurações</Htext>
            <Htext>Admin</Htext>
            <CustomButton1 onPress={limpar}>
                <ButtonText>Limpar navigation</ButtonText>
            </CustomButton1>
        </StyledView>
    );
}




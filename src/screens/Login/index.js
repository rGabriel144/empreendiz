import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';
import {
    CustomButton,
    ButtonText,
    Drawerbutton,
    Container,
    Input,
    LoginButton,
    TextIcon,
    FPasswordButton,
    ButtonText2
} from './styles';


export default function App() {
    const navigation = useNavigation();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        if (username === '' && password === '') {
            await AsyncStorage.setItem('id', username);
            navigation.navigate('MainTabs', { screen: 'Cursos' });
          } else {
            alert('Credenciais inválidas. Tente novamente.');
          }    
      };
    
    const cadastro = () => {  
        navigation.navigate('Cadastro');
    };

    const esquecisenha = () => {
        alert('Esqueci minha senha');
    }
    
    return (
        <Container>
            <View style={styles.loginContainer}>
                <Image
                    source={require('../../img/logo.png')} 
                    style={{ width: 210, height: 200, marginTop: '0%', marginBottom: '20%'}} 
                />
                <Input
                    placeholder="Usuário"
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />
                <Input
                    placeholder="Senha"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry
                />
                <FPasswordButton onPress={esquecisenha}>
                    <ButtonText2>Esqueci minha senha</ButtonText2>
                </FPasswordButton>
                <LoginButton onPress={login}>
                    <ButtonText>Entrar</ButtonText>
                </LoginButton>
                <FPasswordButton onPress={cadastro}>
                    <ButtonText2>Cadastrar</ButtonText2>
                </FPasswordButton>
                <Image
                    source={require('../../img/sebrae.png')} 
                    style={{ width: 200, height: 80, marginTop: '20%', marginBottom: '0%'}} 
                />
            </View>
        </Container>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginContainer: {
        flex: 1,
        backgroundColor: '#3178E4',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});
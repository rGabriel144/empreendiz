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
    LoginContainer,
    Drawerbutton,
    Container,
    Input,
    LoginButton,
    TextIcon,
    FPasswordButton,
    ButtonText2,
    IconLogin,
    ButtonIcon
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function App() {
    const navigation = useNavigation();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const idtest = 'Thomas';

    const login = async () => {
        if (username === '' && password === '') {
            await AsyncStorage.setItem('id', idtest);
            navigation.navigate('MainTabs', { screen: 'Cursos' });
          } else {
            alert('Credenciais inválidas. Tente novamente.');
          }    
      };
    
    const cadastro = () => {  
        alert('Cadastro');
    };

    const esquecisenha = () => {
        alert('Esqueci minha senha');
    }
    
    const loginS = (type) => {
        alert('Login com ' + type);
    }

    return (
        <Container>
            <LoginContainer>
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
                <IconLogin>
                    <ButtonIcon onPress={() => loginS('Facebook')}>
                        <Icon name="facebook" size={30} color="white" style={styles.socialIcon} />
                    </ButtonIcon>
                    <ButtonIcon onPress={() => loginS('Instagram')}>
                        <Icon name="instagram" size={30} color="white" style={styles.socialIcon} />
                    </ButtonIcon>
                    <ButtonIcon onPress={() => loginS('Google')}>
                        <Icon name="google" size={30} color="white" style={styles.socialIcon} />
                    </ButtonIcon>
                </IconLogin>
            </LoginContainer>
        </Container>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialIcon: {
        padding: 10,
    },
});
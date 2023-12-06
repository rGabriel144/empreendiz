import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importe suas telas (Login, Cadastro, Perfil, Inicial) aqui
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Perfil from '../screens/Perfil';
import Inicial from '../screens/Inicial';
import Cursos from '../screens/Cursos';
import Config from '../screens/Config';

import Quiz from '../screens/Quiz';
import Quiz1 from '../screens/Quiz/Quiz1';
import Quiz12 from '../screens/Quiz/Quiz1/Quiz12';
import Quiz13 from '../screens/Quiz/Quiz1/Quiz13';
import Quiz2 from '../screens/Quiz/Quiz2';
import Quiz22 from '../screens/Quiz/Quiz2/Quiz22';
import Quiz23 from '../screens/Quiz/Quiz2/Quiz23';


import Curso1 from '../screens/Cursos/Curso1';
import Curso2 from '../screens/Cursos/Curso2';
import Curso3 from '../screens/Cursos/Curso3';
import Curso4 from '../screens/Cursos/Curso4';
import Curso5 from '../screens/Cursos/Curso5';
import Curso6 from '../screens/Cursos/Curso6';
import Curso7 from '../screens/Cursos/Curso7';
import Curso8 from '../screens/Cursos/Curso8';
import Curso9 from '../screens/Cursos/Curso9';
import Curso10 from '../screens/Cursos/Curso10';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function CursosStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Cursos" component={Cursos} options={{ headerShown: false }} />
      <Stack.Screen name="Curso1" component={Curso1} options={{headerShown: false}}/>
      <Stack.Screen name="Curso2" component={Curso2} options={{headerShown: false}}/>
      <Stack.Screen name="Curso3" component={Curso3} options={{headerShown: false}}/>
      <Stack.Screen name="Curso4" component={Curso4} options={{headerShown: false}}/>
      <Stack.Screen name="Curso5" component={Curso5} options={{headerShown: false}}/>
      <Stack.Screen name="Curso6" component={Curso6} options={{headerShown: false}}/>
      <Stack.Screen name="Curso7" component={Curso7} options={{headerShown: false}}/>
      <Stack.Screen name="Curso8" component={Curso8} options={{headerShown: false}}/>
      <Stack.Screen name="Curso9" component={Curso9} options={{headerShown: false}}/>
      <Stack.Screen name="Curso10" component={Curso10} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

function QuizStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz1" component={Quiz1} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz12" component={Quiz12} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz13" component={Quiz13} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz2" component={Quiz2} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz22" component={Quiz22} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz23" component={Quiz23} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'CursosTab') {
            iconName = 'book';
          } else if (route.name === 'QuizTab') {
            iconName = 'gamepad';
          } else if (route.name === 'PerfilTab') {
            iconName = 'user';
          } else if (route.name === 'ConfiguraçõesTab') {
            iconName = 'cog';
          }

          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarLabel: '',
        headerShown: false,
      })}
    >
      <Tab.Screen name="CursosTab" component={CursosStack} />
      <Tab.Screen name="QuizTab" component={QuizStack} />
      <Tab.Screen name="PerfilTab" component={Perfil} />
      <Tab.Screen name="ConfiguraçõesTab" component={Config} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginStack">
        <Stack.Screen
          name="LoginStack"
          component={LoginStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


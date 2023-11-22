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
import Quiz from '../screens/Quiz';
import Quiz1 from '../screens/Quiz/Quiz1';
import Quiz2 from '../screens/Quiz/Quiz2';
import Config from '../screens/Config';
import Curso1 from '../screens/Cursos/Curso1';

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
    <Stack.Navigator>
      <Stack.Screen name="Cursos" component={Cursos} options={{ headerShown: false }} />
      <Stack.Screen
        name="Curso1"
        component={Curso1}
        options={{
          headerShown: false,
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function QuizStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz1" component={Quiz1} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz2" component={Quiz2} options={{ headerShown: false }} />
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


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
import Admin from '../screens/Config/Admin';
import EditarNome from '../screens/Config/EditarNome';

import Quiz from '../screens/Quiz';
import Quiz1B from '../screens/Quiz/Quiz1B';
import Quiz1B2 from '../screens/Quiz/Quiz1B/Quiz1B2';
import Quiz1B3 from '../screens/Quiz/Quiz1B/Quiz1B3';
import Final1B from '../screens/Quiz/Quiz1B/Final1B';
import Quiz1I from '../screens/Quiz/Quiz1I';
import Quiz1I2 from '../screens/Quiz/Quiz1I/Quiz1I2';
import Quiz1I3 from '../screens/Quiz/Quiz1I/Quiz1I3';
import Quiz1A from '../screens/Quiz/Quiz1A';
import Quiz1A2 from '../screens/Quiz/Quiz1A/Quiz1A2';
import Quiz1A3 from '../screens/Quiz/Quiz1A/Quiz1A3';
import Quiz2B from '../screens/Quiz/Quiz2B';
import Quiz2B2 from '../screens/Quiz/Quiz2B/Quiz2B2';
import Quiz2B3 from '../screens/Quiz/Quiz2B/Quiz2B3';
import Quiz2I from '../screens/Quiz/Quiz2I';
import Quiz2I2 from '../screens/Quiz/Quiz2I/Quiz2I2';
import Quiz2I3 from '../screens/Quiz/Quiz2I/Quiz2I3';
import Quiz2A from '../screens/Quiz/Quiz2A';
import Quiz2A2 from '../screens/Quiz/Quiz2A/Quiz2A2';
import Quiz2A3 from '../screens/Quiz/Quiz2A/Quiz2A3';
import Quiz3B from '../screens/Quiz/Quiz3B';
import Quiz3B2 from '../screens/Quiz/Quiz3B/Quiz3B2';
import Quiz3B3 from '../screens/Quiz/Quiz3B/Quiz3B3';
import Quiz3I from '../screens/Quiz/Quiz3I';
import Quiz3I2 from '../screens/Quiz/Quiz3I/Quiz3I2';
import Quiz3I3 from '../screens/Quiz/Quiz3I/Quiz3I3';
import Quiz3A from '../screens/Quiz/Quiz3A';
import Quiz3A2 from '../screens/Quiz/Quiz3A/Quiz3A2';
import Quiz3A3 from '../screens/Quiz/Quiz3A/Quiz3A3';



import Curso1 from '../screens/Cursos/Curso1';
import Curso1B from '../screens/Cursos/Curso1/Curso1B';
import Curso1I from '../screens/Cursos/Curso1/Curso1I';
import Curso1A from '../screens/Cursos/Curso1/Curso1A';
import Material1 from '../screens/Cursos/Curso1/Material1';
import Curso2 from '../screens/Cursos/Curso2';
import Curso2B from '../screens/Cursos/Curso2/Curso2B';
import Curso2I from '../screens/Cursos/Curso2/Curso2I';
import Curso2A from '../screens/Cursos/Curso2/Curso2A';
import Material2 from '../screens/Cursos/Curso2/Material2';
import Curso3 from '../screens/Cursos/Curso3';
import Curso3B from '../screens/Cursos/Curso3/Curso3B';
import Curso3I from '../screens/Cursos/Curso3/Curso3I';
import Curso3A from '../screens/Cursos/Curso3/Curso3A';
import Material3 from '../screens/Cursos/Curso3/Material3';
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
      <Stack.Screen name="Curso1B" component={Curso1B} options={{headerShown: false}}/>
      <Stack.Screen name="Curso1I" component={Curso1I} options={{headerShown: false}}/>
      <Stack.Screen name="Curso1A" component={Curso1A} options={{headerShown: false}}/>
      <Stack.Screen name="Material1" component={Material1} options={{headerShown: false}}/>
      <Stack.Screen name="Curso2" component={Curso2} options={{headerShown: false}}/>
      <Stack.Screen name="Curso2B" component={Curso2B} options={{headerShown: false}}/>
      <Stack.Screen name="Curso2I" component={Curso2I} options={{headerShown: false}}/>
      <Stack.Screen name="Curso2A" component={Curso2A} options={{headerShown: false}}/>
      <Stack.Screen name="Material2" component={Material2} options={{headerShown: false}}/>
      <Stack.Screen name="Curso3" component={Curso3} options={{headerShown: false}}/>
      <Stack.Screen name="Curso3B" component={Curso3B} options={{headerShown: false}}/>
      <Stack.Screen name="Curso3I" component={Curso3I} options={{headerShown: false}}/>
      <Stack.Screen name="Curso3A" component={Curso3A} options={{headerShown: false}}/>
      <Stack.Screen name="Material3" component={Material3} options={{headerShown: false}}/>
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
      <Stack.Screen name="Quiz1B" component={Quiz1B} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz1B2" component={Quiz1B2} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz1B3" component={Quiz1B3} options={{ headerShown: false }} />
      <Stack.Screen name="Final1B" component={Final1B} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz1I" component={Quiz1I} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz1I2" component={Quiz1I2} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz1I3" component={Quiz1I3} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz1A" component={Quiz1A} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz1A2" component={Quiz1A2} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz1A3" component={Quiz1A3} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz2B" component={Quiz2B} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz2B2" component={Quiz2B2} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz2B3" component={Quiz2B3} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz2I" component={Quiz2I} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz2I2" component={Quiz2I2} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz2I3" component={Quiz2I3} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz2A" component={Quiz2A} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz2A2" component={Quiz2A2} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz2A3" component={Quiz2A3} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz3B" component={Quiz3B} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz3B2" component={Quiz3B2} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz3B3" component={Quiz3B3} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz3I" component={Quiz3I} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz3I2" component={Quiz3I2} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz3I3" component={Quiz3I3} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz3A" component={Quiz3A} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz3A2" component={Quiz3A2} options={{ headerShown: false }} />
      <Stack.Screen name="Quiz3A3" component={Quiz3A3} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function ConfigStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Config" component={Config} options={{ headerShown: false }} />
      <Stack.Screen name="Admin" component={Admin} options={{ headerShown: false }} />
      <Stack.Screen name="EditarNome" component={EditarNome} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}


function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#2863bb',
          borderTopColor: '#2863bb',
          height: 50,
        },
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

          return <Icon name={iconName} color={'#FFF'} size={size} />;
        },
        tabBarLabel: '',
        headerShown: false,
      })}
    >
      <Tab.Screen name="CursosTab" component={CursosStack} />
      <Tab.Screen name="QuizTab" component={QuizStack} />
      <Tab.Screen name="PerfilTab" component={Perfil} />
      <Tab.Screen name="ConfiguraçõesTab" component={ConfigStack} />
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


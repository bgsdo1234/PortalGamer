import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Button, Avatar } from 'react-native-paper'

import PaginaInicial from './paginaInicial/index'
import PaginaJogos from './paginaJogos/index'
import DetalhesJogos from './paginaInicial/jogos/detalhes';
import PaginaNoticias from './paginaNoticias';

  function Perfil() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator()
  const Stack = createStackNavigator()
  
  function BarraInferior() {
    return (
        <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#a8a8a8',
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#7478e3',
            borderTopWidth: 0,

            bottom: 8,
            left: 8,
            right: 8,
            elevation: 0,
            borderRadius: 10
          },
          headerStyle: {
            backgroundColor: '#7478e3'
           },
           headerTintColor: 'white'
        }}
        >
          <Tab.Screen name="PaginaInicial" component={PaginaInicial} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if(focused){
                 return <Ionicons name="home" size={size} color={color} />
               }
               return <Ionicons name="home-outline" size={size} color={color}/>
            }
          }}
          />
          <Tab.Screen name="Jogos" component={PaginaJogos} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
            if(focused){
              return <Ionicons name="game-controller" size={size} color={color} />
            }
              return <Ionicons name="game-controller-outline" size={size} color={color}/>
            }
          }}
          />
          <Tab.Screen name="Noticias" component={PaginaNoticias} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if(focused){
                 return <Ionicons name="md-newspaper" size={size} color={color} />
               }
               return <Ionicons name="md-newspaper-outline" size={size} color={color}/>
            }
          }}
          />
          <Tab.Screen name="Perfil" component={Perfil} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => {
              if(focused){
                 return <Ionicons name="person-circle" size={size} color={color} />
               }
               return <Ionicons name="person-circle-outline" size={size} color={color}/>
            }
          }}
          />
        </Tab.Navigator>
    );
  }

  export default function app() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Principal' component={BarraInferior} options={{ title: 'Inicio', headerTransparent: true, headerShown: false }}/>
          <Stack.Screen name='DetalhesJogos' component={DetalhesJogos}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
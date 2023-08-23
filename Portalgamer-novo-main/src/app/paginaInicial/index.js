import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Avatar, Button } from 'react-native-paper'
import { View, StyleSheet, ScrollView, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import Noticias from './noticias'
import Jogos from './jogos'
import ProcurarJogadores from './procurarJogadores'

import DetalhesJogos from './jogos/detalhes'
import DetalhesNoticias from './noticias/detalhes'
import PesquisarJogos from '../pesquisarJogos'

function PaginaInicial({ navigation }) {

    return(
        <View style={estilos.container}>

            <ScrollView>
                
                <Noticias navigation={navigation}
                />
                
                <Jogos navigation={navigation} 
                />

                <ProcurarJogadores 
                />

            </ScrollView>
        
        </View>
    )
}

const Stack = createStackNavigator()

export default function App(){

    const navigation = useNavigation();

    const pesquisarJogos = () => {
        navigation.navigate('PesquisarJogos');
    };

    const [text, onChangeText] = React.useState('Pesquisar apps e jogos');

    return(

        <Stack.Navigator
        screenOptions={{
           headerStyle: {
            backgroundColor: '#7478e3'
           },
           headerTintColor: 'white'
        }}
        >

            <Stack.Screen name="PaginaInicial" component={PaginaInicial} 
            options={{
                    headerRight: ({ navigation }) => ( 
                        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 15}}>
                            <Avatar.Icon size={35} icon={'bell'} 
                            style={{backgroundColor: null, marginRight: 15}} />
                            <Avatar.Image rounded size={35} source={require('../../../assets/avatar.jpg')} style={{}} />
                        </View>
                        ), 
                        headerTitle: '',
                        headerLeft: () => (

                            <View style={{marginLeft: 20}}>
                                <Button 
                                mode='outlined' 
                                textColor='white' 
                                icon={'magnify'}
                                style={{borderColor: 'white'}}
                                onPress={pesquisarJogos}>
                                    Pesquisar apps e jogos
                                </Button>
                            </View>
                        )
                    }}/>
            <Stack.Screen name="DetalhesJogos" component={DetalhesJogos} BackAction={true} 
            options={{headerRight: () => (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Avatar.Icon size={35} icon={'dots-vertical'} style={{backgroundColor: 'white', marginRight: 15}} />
                    <Avatar.Icon size={35} icon={'magnify'} style={{backgroundColor: 'white', marginRight: 15}} />
                </View>
            ), headerTitle: ''
            }}/>
            <Stack.Screen name="DetalhesNoticias" component={DetalhesNoticias} BackAction={true} />
            <Stack.Screen name="PesquisarJogos" component={PesquisarJogos} BackAction={true} 
            options={{headerShown: false
                }}
            />

        </Stack.Navigator>

    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: '#f5faff'
    },
    textinput: {
        height: 40,
        margin: 12,
        padding: 10,
        paddingHorizontal: 15,
        marginRight: 90,
      },
})
import { View, ScrollView, TextInput, onChangeText, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Button, Avatar } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import JogosAcao from './jogos/acao/'
import JogosCasuais from './jogos/casual'
import JogosOffline from './jogos/offline'
import DetalhesJogos from '../paginaInicial/jogos/detalhes'
import PesquisarJogos from '../pesquisarJogos';

function PaginaJogos({ navigation }) {
    return(
        <ScrollView>

            <JogosAcao navigation={navigation} />
            <JogosCasuais navigation={navigation} />
            <JogosOffline navigation={navigation} />

        </ScrollView>
    )
}

const Stack = createStackNavigator()

export default function Jogos() {

    const navigation = useNavigation();

    const pesquisarJogos = () => {
        navigation.navigate('PesquisarJogos');
    };

    return(
        <Stack.Navigator 
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
            <Stack.Screen name='PaginaJogos' component={PaginaJogos} 
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
                    ),
                tabBarIcon: ({ color, size, focused }) => {
                if(focused){
                  return <Ionicons name="game-controller" size={size} color={color} />
                }
                return <Ionicons name="game-controller-outline" size={size} color={color}/>
              }
            }}/>
            <Stack.Screen name='DetalhesJogos' component={DetalhesJogos}  
            options={{headerRight: () => (
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Avatar.Icon size={35} icon={'dots-vertical'} style={{backgroundColor: 'white', marginRight: 15}} />
                    <Avatar.Icon size={35} icon={'magnify'} style={{backgroundColor: 'white', marginRight: 15}} />
                </View>
            ), headerTitle: ''
            }}
            />
            <Stack.Screen name="PesquisarJogos" component={PesquisarJogos} 
            options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

const estilos = StyleSheet.create({
    textinput: {
        height: 40,
        margin: 12,
        padding: 10,
        paddingHorizontal: 15,
        marginRight: 90,
      },
})
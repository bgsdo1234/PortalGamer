import { View, StyleSheet, TextInput, ScrollView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import { Button, Avatar } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons';

import Noticias from './noticias'
import PesquisarNoticias from '../pesquisarNoticias';

function Noticias1({ navigation }) {
  return(
    <View style={estilos.container}>

      <Noticias navigation={navigation} />

    </View>
  )
}

const Stack = createStackNavigator()

export default function PaginaNoticias() {

  const navigation = useNavigation();

  const pesquisarNoticias = () => {
      navigation.navigate('PesquisarNoticias');
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

      <Stack.Screen name="PaginaNoticias" component={Noticias1} BackAction={true} 
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
                  onPress={pesquisarNoticias}>
                      Pesquisar noticias
                  </Button>
              </View>
          ),
      tabBarIcon: ({ color, size, focused }) => {
      if(focused){
        return <Ionicons name="game-controller" size={size} color={color} />
      }
      return <Ionicons name="game-controller-outline" size={size} color={color}/>
    }
      }}
      />

      <Stack.Screen name="PesquisarNoticias" component={PesquisarNoticias} 
      options={{headerShown: false
      }}
      />

    </Stack.Navigator>
  )
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#f5faff',
    flex: 1
  }
})
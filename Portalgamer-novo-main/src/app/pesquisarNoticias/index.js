import React, { useState } from 'react'
import { View, TextInput, StyleSheet, FlatList, Text} from 'react-native'
import { Card, Title, IconButton } from 'react-native-paper'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

import PaginaNoticias from '../paginaNoticias';

export default function PesquisarNoticias() {
    
    const [noticias, setNoticias] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleSearch = async () => {
        try {
          const response = await axios.get('https://639b4ea231877e43d6891936.mockapi.io/games', {
            params: {
              search: searchText,
            },
          });
          console.log(response.data.length)
          setNoticias(response.data); 
        } catch (error) {
          console.error('Erro ao buscar jogos:', error);
        }
      };

    const navigation = useNavigation();

        const voltarTelaDeNoticias = () => {
        navigation.navigate('PaginaNoticias');
    };

    return(
        <View>
            <View style={{flexDirection: 'row', backgroundColor: '#7478e3', paddingTop: 18}}>

            <IconButton
            icon='arrow-left'
            iconColor='white'
            size={33}
            onPress={voltarTelaDeNoticias}
            />

            <TextInput
                style={estilos.input}
                onChangeText={text => setSearchText(text)}
                value={searchText}
                autoFocus={true}
                placeholder=' Procurar noticias ...'
            />

            <IconButton
            icon='magnify'
            mode="contained" 
            buttonColor='white'
            textColor='#7478e3'
            onPress={handleSearch}
            style={estilos.buttonPesquisar}
            />

            </View>
            <FlatList 
                 data={noticias}
                 keyExtractor={(item) => item.id.toString()}
                 renderItem={({ item }) => (
                    <Text>{item.Nome}</Text>
                 )}
            />
        </View>
    )
}

const estilos = StyleSheet.create({
    linha: {
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    input: {
        height: 40,
        width: 210,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        borderColor: 'white',
        color: 'white'
      },
    card: {
        height: 70,
        width: '95%',
        marginHorizontal: 7,
        backgroundColor: '#f5faff',
        marginVertical: 7,
        borderWidth: 0,
        borderColor: 'transparent',
        elevation: 0,
    },
    capaDoJogo: {
        height:70,
        width: 70   
    },
    tituloDoJogo: {
        fontSize: 12,
        flexDirection: 'row',
        fontWeight: 'bold',
        marginStart: 5
    },
    studioDoJogo: {
        fontSize: 12,
        flexDirection: 'row',
        fontWeight: 'bold',
        marginStart: 5,
    },
    textTamanhoDoJogo: {
        fontSize: 12,
        flexDirection: 'row',
        fontWeight: 'bold',
        alignItems: 'center',
        marginBottom: 7
    },
    buttonPesquisar: {
        size: 9,
        marginTop: 13,
    }
})
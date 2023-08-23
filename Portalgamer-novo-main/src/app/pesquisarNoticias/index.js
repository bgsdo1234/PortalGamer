import React, { useState } from 'react'
import { View, TextInput, StyleSheet, FlatList, Text, ScrollView} from 'react-native'
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
            <ScrollView >
            <FlatList 
                 data={noticias}
                 keyExtractor={(item) => item.id.toString()}
                 renderItem={({ item }) => (
                    <View>

                        <Card 
                        style={estilos.Card}
                        elevation={0}>

                            <View style={estilos.CardContainer}>

                                <Card style={{width: 75, height: 75}}>
                                    <Card.Cover  
                                    source={{ uri: item.ImagemNoticia }}
                                    style={estilos.imagemNoticia}
                                    />
                                </Card>

                                <Card 
                                style={{width: '48%', backgroundColor: '#dbeeff', flexDirection: 'row'}}
                                elevation={0}
                                onPress={() => navigation.navigate('DetalhesNoticias', {id: item.id})}>
                                    <Title
                                    style={estilos.textTitulo}
                                    >{item.NomeNoticia}
                                    </Title>
                                </Card>
                                <Title style={{marginTop: 32, marginLeft: 50, fontWeight: 'bold', fontSize: 10}}> 
                                    {item.DataDeLancamento}
                                </Title>

                            </View>

                        </Card>

                    </View>
                 )}
            />
            </ScrollView>
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
      Card: {
        marginVertical: 2.5,
        borderBottomWidth: 2,
        borderRadius: 0,
        paddingBottom: 5,
        borderColor: '#6587a6',
        backgroundColor: null,
        maxWidth: '100%'
      },
      CardContainer: {
        flexDirection: 'row',
        backgroundColor: '#dbeeff',
        paddingVertical: 5,
        borderTopLeftRadius: 17,
        borderBottomLeftRadius: 17,
      },
      imagemNoticia: {
        width: '100%',
        height: '100%'
      },
      textTitulo: {
        fontWeight: 'bold',  
        marginLeft: 10,
        fontSize: 10
      }
})
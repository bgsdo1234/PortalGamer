import React, { useState } from 'react'
import { View, TextInput, StyleSheet, FlatList} from 'react-native'
import { Card, Title, IconButton } from 'react-native-paper'
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function limitarTexto(texto, limite) {
    if (texto.length > limite) {
      return texto.substring(0, limite) + '...';
    }
    return texto;
  }

export default function PesquisarJogos() {
    const [games, setGames] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleSearch = async () => {
        try {
          const response = await axios.get('https://644bb0454bdbc0cc3a97ccbc.mockapi.io/Jogos', {
            params: {
              search: searchText,
            },
          });
          console.log(response.data.length)
          setGames(response.data); 
        } catch (error) {
          console.error('Erro ao buscar jogos:', error);
        }
      };
    const navigation = useNavigation();

    const voltarTelaPrincipal = () => {
      navigation.navigate('PaginaInicial');
    };

    return(
        <View style={{flex: 1, backgroundColor: '#f5faff', paddingBottom: 80}}>

            <View style={{flexDirection: 'row', backgroundColor: '#7478e3', paddingTop: 18}}>

                <IconButton
                icon='arrow-left'
                iconColor='white'
                size={33}
                onPress={voltarTelaPrincipal}
                />

                <TextInput
                    style={estilos.input}
                    onChangeText={text => setSearchText(text)}
                    value={searchText}
                    autoFocus={true}
                    placeholder=' Procurar jogos ...'
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
                data={games}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card
                    onPress={() => navigation.navigate('DetalhesJogos', {id: item.id})}
                    style={estilos.card}
                    mode='outlined'
                    >        
                    <View style={{flexDirection: 'row'}}>
                        <Card.Cover 
                        source={{ uri: item.capaDoJogo }}
                        style={estilos.capaDoJogo}
                        />
                        <View>
                        <Title
                        style={estilos.tituloDoJogo}
                        >
                            {item.nomeDoJogo}
                        </Title>
                        <Title style={estilos.studioDoJogo}>
                            {limitarTexto(item.studioDeCriacaoDoJogo, 10)}  -
                            <Title style={{fontWeight:'normal', fontSize: 12}}>
                                {item.genero1}
                            </Title>
                        </Title>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'flex-end',  marginLeft: 'auto'}}>
                            <IconButton 
                            size={15}
                            icon='arrow-down-bold-box-outline'
                            />
                            <Title style={estilos.textTamanhoDoJogo}>
                            {item.tamanhoDoJogo}
                            </Title>
                        </View>
                        
                    </View>
                    </Card>
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
import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native'
import { Card, Title } from 'react-native-paper'


export default function DetalhesNoticias({route}) {

    const id = route?.params?.id

    const [noticia, setNoticia] = useState({})

    const getNoticia = async (userId) => {
        try {

            const resposta = await fetch(
                'https://639b4ea231877e43d6891936.mockapi.io/games/' + userId
            )

            const json = await resposta.json()
            setNoticia(json)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNoticia(id)
    }, [id])

    //=====================================================================================================================================

    const [noticias, setNoticias] = useState([])

    const getNoticias = async () => {
        try{
            const resposta = await fetch(
                "https://639b4ea231877e43d6891936.mockapi.io/games"
            )
            const json = await resposta.json()
            setNoticias(json)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNoticias()
    }, [])

    //==========================================================================================================================

    return (
        <ScrollView>
            {id != undefined?(

                <View>

                    <Card.Cover source={{ uri: noticia.ImagemNoticia }} style={estilos.imagemNoticia} />

                    <Title style={estilos.tituloNoticia}>{noticia.NomeNoticia}</Title>

                    <Text style={estilos.dataDelancamento}>{noticia.DataDeLancamento}</Text>

                    <Text style={estilos.detalhesDaNoticia}>{noticia.DetalhesDaNoticia}</Text>

                    <View style={estilos.containerMaisNoticias}>
                        
                        <Title style={estilos.maisNoticias}>Mais Notícias:</Title>

                        <FlatList 
                        data={noticias}
                        horizontal={true}
                        style={{marginHorizontal: 10, marginTop: 20}}
                        renderItem={({item}) => 

                        <Card style={estilos.cardMaisNoticias}>

                            <Card.Cover source={{ uri: item.ImagemNoticia }} />
                            <Title style={estilos.tituloDaNoticia}>{item.NomeNoticia} </Title>

                        </Card>
                        }
                        />

                    </View>

                    

                    

                </View>

            ) : (
                <View>

                    <Text>Cadê o id</Text>

                </View>
            )} 
        </ScrollView>
    )
}


const estilos = StyleSheet.create ({
    imagemNoticia: {
        height: 230,
        width: 360,
        borderRadius: 0,
        overflow: 'hidden'
    },
    tituloNoticia: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginHorizontal: 21
    },
    dataDelancamento: {
        marginHorizontal: 30,
        color: 'gray',
        fontSize: 16,
        marginTop: 5,
        textAlign: 'right'
    },
    detalhesDaNoticia: {
        marginHorizontal: 18,
        fontSize: 16,
        marginTop: 25,
        textAlign: 'justify'
    },
    containerMaisNoticias: {
        marginTop: 20,
        marginBottom: 0,
        backgroundColor: 'red',
        margin: 10,
        borderBottomEndRadius: 30,
        borderTopStartRadius: 40

    },
    maisNoticias: {
        marginTop: 20,
        marginHorizontal: 12,
        fontWeight: 'bold',
        fontSize: 21
    },
    tituloDaNoticia: {
        fontSize: 15,
        flexDirection: 'row',
        textAlign: 'justify',
        fontWeight: 'bold',
        marginHorizontal: 6
    }, 
    
    cardMaisNoticias: {
        height: 265, 
        width: 300, 
        marginBottom: 120, 
        marginHorizontal: 6,
    },
})
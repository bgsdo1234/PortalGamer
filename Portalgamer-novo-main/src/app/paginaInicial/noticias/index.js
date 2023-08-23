import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, ScrollView  } from 'react-native'
import { Card, Title } from 'react-native-paper'

export default function noticias({ navigation }){
    
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

    return(

        <View>

            <Title style={estilos.tituloNoticias}>Notícias</Title>

                <FlatList 
                data={noticias}
                horizontal={true}
                style={estilos.noticias}
                renderItem={({ item }) => (

                    <Card
                    onPress={() => navigation.navigate('DetalhesNoticias', {id: item.id})}
                    style={estilos.card}
                    >
                            
                        <Card.Cover 
                        source={{ uri: item.ImagemNoticia }}
                        style={estilos.capaDoJogo}
                        />

                        <Title style={estilos.tituloDaNoticia}>{item.NomeNoticia} </Title>

                    </Card>
                    
                    )}
                
                />

        </View>
    )
}

const estilos = StyleSheet.create({
    tituloNoticias:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginStart: 5
    },
    noticias: {
        marginTop: 15,
        marginHorizontal: 10
    },
    card: {
        height: 250,
        width: 300,
        marginHorizontal: 6,
        borderRadius: 15,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        backgroundColor: '#e8f4ff',
        padding: 3,
    },
    capaDoJogo: {
        height:180,
        width: 294,
    },
    tituloDaNoticia: {
        fontSize: 15,
        flexDirection: 'row',
        textAlign: 'justify',
        fontWeight: 'bold',
        marginHorizontal: 6
    }
})
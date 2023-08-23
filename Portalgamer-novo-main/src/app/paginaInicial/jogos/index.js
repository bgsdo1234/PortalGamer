import React, { useEffect, useState } from 'react'
import { View, FlatList, StyleSheet, ScrollView } from 'react-native'
import { Card, Title } from 'react-native-paper'

export default function jogos({ navigation }) {
    
    const [jogos, setJogos] = useState([])

    const getJogos = async () => {
        try{
            const resposta = await fetch(
                'https://644bb0454bdbc0cc3a97ccbc.mockapi.io/Jogos'
            )
            const json = await resposta.json()
            setJogos(json)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getJogos()
    }, [])

    return(
        <View style={{paddingTop: 3}}>

            <Title style={estilos.tituloJogo}>Jogos</Title>

            <ScrollView
            style={estilos.jogo}
            >

                <FlatList 
                data={jogos}
                horizontal={true}
                renderItem={({ item }) => (

                    <Card
                    onPress={() => navigation.navigate('DetalhesJogos', {id: item.id})}
                    
                    style={estilos.card}
                    >
                            
                        <Card.Cover 
                        source={{ uri: item.capaDoJogo }}
                        style={estilos.capaDoJogo}
                        />

                        <Title
                        style={estilos.tituloDoJogo}
                        >
                            {item.nomeDoJogo}

                        </Title>

                    </Card>
                    
                    )}
                
                />

            </ScrollView>

        </View>
    )
}

const estilos = StyleSheet.create({
    tituloJogo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        marginStart: 5
    },
    jogo: {
        marginHorizontal: 10,
        marginTop: 15
    },
    card: {
        height: 150,
        width: 75,
        marginHorizontal: 7,
        borderRadius: 2,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        backgroundColor: '#f5faff',
        elevation: 0
    },
    capaDoJogo: {
        height:120,
        width: 75    
    },
    tituloDoJogo: {
        fontSize: 12,
        flexDirection: 'row',
        textAlign: 'center',
        fontWeight: 'bold'
    }
})
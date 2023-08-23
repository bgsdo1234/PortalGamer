import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Card, Avatar, Title, IconButton } from 'react-native-paper';

export default function DetalhesJogos({route}) {
    
    const id = route?.params?.id

    const [jogo, setJogo] = useState({})

    const getJogo = async (userId) => {
        try {

            const resposta = await fetch(
                'https://644bb0454bdbc0cc3a97ccbc.mockapi.io/Jogos/' + userId
            )

            const json = await resposta.json()
            setJogo(json)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getJogo(id)
    }, [id])

    return (
        <View>
            {id != undefined? (

                <ScrollView>

                        <View style={estilos.logoENome}>

                            <Avatar.Image size={35} source={{ uri: jogo.logoDoJogo }} />
                            <Title style={{marginLeft: 10}}>{jogo.nomeDoJogo}</Title>

                        </View>

                        <View style={estilos.informacoesDoJogo}>

                            <View style={{alignItems: 'center'}}>

                                <Text>Gênero</Text>
                                <Text style={{color: 'gray'}}>{jogo.genero1}</Text>
                                
                            </View>

                            <View style={estilos.linhaVertical}></View>

                            <View style={{flexDirection: 'column-reverse'}}>

                                <Text style={{color: 'gray'}}>{jogo.tamanhoDoJogo}</Text>

                            </View>

                            <View style={estilos.linhaVertical}></View>

                            <View style={{alignItems: 'center'}}>

                                <Text 
                                style={estilos.classificacaoDeIdade}>
                                    {jogo.classificacaoDeIdade}
                                </Text>
                                <Text
                                style={{color: 'gray', fontSize: 11, marginTop: 2}}>
                                    Classificação {jogo.classificacaoDeIdade} anos
                                </Text>

                            </View>

                        </View>

                        <ScrollView horizontal={true} style={{marginHorizontal: 15}}>

                            <Card.Cover source={{uri: jogo.imagemSobreOJogo1}} style={estilos.imagensDoJogo} />
                            <Card.Cover source={{uri: jogo.imagemSobreOJogo2}} style={estilos.imagensDoJogo} />
                            <Card.Cover source={{uri: jogo.imagemSobreOJogo3}} style={estilos.imagensDoJogo} />

                        </ScrollView>

                        <View>

                            <Card style={estilos.sobreOJogoCSS}>

                                <View style={estilos.sobreOJogoEBotao}>

                                    <Text
                                    style={{fontWeight: 'bold', fontSize: 22, marginTop: 10}}>
                                        Sobre o jogo    
                                    </Text>
                                    <IconButton
                                    icon="arrow-right"
                                    />
                                    <View>
                                        <Text></Text>
                                    </View>

                                </View>

                            </Card>

                        </View>

                        <View style={{marginTop: 10, flexDirection: 'row', marginHorizontal: 10}}>

                            <Text style={estilos.generoDoJogo}>
                                {jogo.genero1}
                            </Text>
                            <Text style={estilos.generoDoJogo}>
                                {jogo.genero2}
                            </Text>
                            <Text style={estilos.generoDoJogo}>
                                {jogo.genero3}
                            </Text>

                        </View>

                </ScrollView>

            ) : (

                <View>

                    <Text>Cadê o id</Text>

                </View>
            )}
        </View>
    )
}

const estilos = StyleSheet.create ({
    
    logoENome: {
        flexDirection: 'row',
        padding: 25
    },
    informacoesDoJogo: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingBottom: 25
    },
    linhaVertical: {
        height: 30,
        borderRightWidth: 0.5,
        marginHorizontal: 20
    },
    classificacaoDeIdade: {
        backgroundColor: '#2eb8ac',
        padding: 3.5,
        borderRadius: 3,
        fontSize: 12,
        fontWeight: 'bold',
    },
    generoDoJogo: {
        backgroundColor: '#CCCCCC',
        padding: 5,
        borderRadius: 14,
        paddingHorizontal: 13,
        marginHorizontal: 10
    },
    imagensDoJogo: {
        marginHorizontal: 5,
        height: 180,
        width: 300
    },
    sobreOJogoCSS: {
        marginTop: 15,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    sobreOJogoEBotao: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})
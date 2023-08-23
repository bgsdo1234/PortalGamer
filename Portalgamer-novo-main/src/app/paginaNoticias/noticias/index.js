import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ScrollView, Dimensions, useWindowDimensions } from 'react-native'
import { Card, Title } from 'react-native-paper'

export default function Noticias({ navigation }) {

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

      <FlatList
      data={noticias}
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

      <View style={{marginBottom: 150}}></View>

    </View>
  )
}

const estilos = StyleSheet.create({
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
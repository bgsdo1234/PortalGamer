import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Title } from 'react-native-paper'

export default function JogosCasuais({ navigation }) {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    // Função para obter dados da API filtrados por gênero
    const obterDadosPorGenero = async () => {
      try {
        const response = await fetch('https://644bb0454bdbc0cc3a97ccbc.mockapi.io/Jogos');
        const data = await response.json();
        const jogosFiltrados = data.filter(jogo =>
          jogo.genero1 === 'Casual' || jogo.genero2 === 'Casual' || jogo.genero3 === 'Casual'
        );
        setJogos(jogosFiltrados);
      } catch (error) {
        console.error('Ocorreu um erro:', error);
      }
    };

    obterDadosPorGenero();
  }, []);

  return (
    <View>
      <View style={{ margin: 10, marginTop: 30, borderRadius: 5 }}>
        <Text
        style={estilos.tituloAcao}
        >Jogos Casuais:</Text>
        <ScrollView horizontal={true} style={{marginStart: 15, marginEnd: 15}}>
        {jogos.map(jogo => (

          <View key={jogo.id}>

              <Card 
              onPress ={() => navigation.navigate('DetalhesJogos', {id: jogo.id})}
              style={estilos.Card} elevation={0}>
                  
                  <Card.Cover
                  source={{ uri: jogo.capaDoJogo }}
                  style={estilos.CapaDoJogo}
                  />
                  <Title style={estilos.tituloJogo}>{jogo.nomeDoJogo}</Title>

              </Card>

          </View>
        ))}
        </ScrollView>
      </View>  
    </View>
  );
};

const estilos= StyleSheet.create ({
    Card: {
        height: 130,
        width: 100,
        marginHorizontal: 5,
        borderRadius: 10,
        backgroundColor: 'deefff',
        
    },
    CapaDoJogo: {
        height:100,
        width: 100,
    },
    tituloJogo: {
      fontSize: 12,
      fontWeight: 'bold',
      marginTop: 1,
      marginHorizontal: 5,
      textAlign: 'center'
    },
    tituloAcao: {
      fontSize: 23,
      fontWeight: 'bold',
      marginTop: 5,
      marginBottom: 12,
      marginStart: 10
    }
})
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Title } from 'react-native-paper'

export default function JogosOffline({ navigation }) {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    // Função para obter dados da API filtrados por gênero
    const obterDadosPorGenero = async () => {
      try {
        const response = await fetch('https://644bb0454bdbc0cc3a97ccbc.mockapi.io/Jogos');
        const data = await response.json();
        const jogosFiltrados = data.filter(jogo =>
          jogo.genero1 === 'Off-line' || jogo.genero2 === 'Off-line' || jogo.genero3 === 'Off-line'
        );
        setJogos(jogosFiltrados);
      } catch (error) {
        console.error('Ocorreu um erro:', error);
      }
    };

    obterDadosPorGenero();
  }, []);

  return (
    <ScrollView>
      <View style={{ margin: 10, marginTop: 10, borderRadius: 5 }}>
        <Text
        style={estilos.tituloAcao}
        >Jogos Off-line:</Text>
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
    </ScrollView>
  );
};

const estilos= StyleSheet.create ({
    Card: {
        height: 160,
        width: 100,
        borderRadius: 10,
        backgroundColor: 'deefff',
        
    },
    CapaDoJogo: {
        height:90,
        width: 90,
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
import React,{Component} from 'react'
import { StyleSheet, View} from 'react-native';

import Aplicativo from './src/app/index'

export default function App({ navigation }) {
    return (
      <View style={estilos.constainer}>

        <Aplicativo />

      </View>
        
    );
}

const  estilos =  StyleSheet.create ({
  constainer: {
    flex: 1
  }
  
})
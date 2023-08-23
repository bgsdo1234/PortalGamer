import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Card, Title, Button } from 'react-native-paper'


export default function App() {
 return (
   <View style={styles.container}>
    
     {/* <Card
     style={styles.card}
     >

      <Card.Cover 
      source={''}
      title="quer achar um parceiro?"
      />

       <Card.Title
       title="Quer achar um"
       titleStyle={styles.titleStyle}
       />


       <Card.Title
       title="parceiro"
       titleStyle={styles.titleStyle}
       />


       <View
       style={{flexDirection: 'row-reverse'}}
       >
        
         <Button
         mode="contained"
         style={styles.btnProcurar}
         >Procurar
         </Button>


         <Card.Title
         title="aperte aqui"
         titleStyle={styles.subtitleStyle}
         />
      
       </View>
      
     </Card> */}


   </View>
 );
}


const styles = StyleSheet.create({
 container: {
   //flex: 1,
   backgroundColor: '#fff',
   justifyContent: 'center',
   marginTop: 50,
 },
 card: {
   backgroundColor: 'red',
   paddingTop: 20,
   paddingBottom: 20,
   marginHorizontal: 10
 },
 titleStyle: {
   fontSize: 38,
   paddingTop: 30,
   fontWeight: 'bold',
   position: 'absolute'
 },
 subtitleStyle: {
   paddingLeft: 20,
   paddingTop: 20,
   textAlign: 'right',
   fontSize: 20
 },
 btnProcurar: {
   paddingTop: 10
 }
});


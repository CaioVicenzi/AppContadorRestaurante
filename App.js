import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Clientes</Text>

      <View style={styles.hStack}>
        <Button style={styles.button} title="-1" onPress={diminuirContador}/>
        <Text>{contador}</Text>
        <Button style={styles.button} title="+1" onPress={aumentarContador}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );


  function aumentarContador () {
    setContador(contador + 1)
  }

  function diminuirContador () {
    setContador(contador - 1)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'brown',
    marginBottom: 100
  },

  hStack: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '70%', 
  }
});

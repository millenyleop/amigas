import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const styles = StyleSheet.create({
  container: {
    flex:  1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 300,
  },
  text: {
    fontSize:  50,
    textAlign: 'center',
    marginTop:  100, 
  },
  button: {
    marginTop:  40,
  },
});
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Amigas</Text>
      <Button
        title="Emmily"
        onPress={() => navigation.navigate('Emmily')}
        style={styles.button}
      />
      <Button
        title="Gabriela"
        onPress={() => navigation.navigate('Gabriela')}
        style={styles.button}
      />
    </View>
  );
}

function EmmilyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre Emmily</Text>
      <Text style={styles.text}>Emmily é uma amiga companheira, que sempre está comigo, é uma pessoa pura e inocente.</Text>
      <text>Desafio a Emmily imitar uma serpente saindo do vaso </text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      />
    </View>
  );
}

function GabrielaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre Gabriela</Text>
      <Text style={styles.text}>Gabriela é uma amiga que sempre está comigo, carrega meus lanches e eu tenho muito carinho por ela.</Text>
      <text>Desafio a Gabriela a imitar um bem-ti-vi</text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      />
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Emmily" component={EmmilyScreen} />
        <Stack.Screen name="Gabriela" component={GabrielaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, ImageBackground, Image, ImageComponent, StyleSheet, Text, TextInput, View } from 'react-native';
import Menu from './Menu';
import style from './style.module';
import Login from './Service';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import Criar from './criar';
import Editar from './Editar';



function HomeScreen({ navigation }: { navigation: NavigationProp<any> }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onChangeUsername = (username: any) => { setUsername(username) };
  const onchangePassword = (password: any) => { setPassword(password) };
  const login =  async () => {
    const teste = await Login(username, password);
    if (teste == true) {
      navigation.navigate('Menu');
    } else {
      alert('Usuário ou senha incorreto!')
    }
  }

  return (
    <SafeAreaProvider>
        <View style={style.container}>
          <Text style={style.text}>Login:</Text>
          <TextInput
            placeholder="Login"
            placeholderTextColor='#000'
            style={style.input}
            value={username}
            onChangeText={onChangeUsername}
          />
          <Text style={style.text}>Senha:</Text>
          <TextInput
            placeholder="Senha"
            placeholderTextColor='#000'
            style={style.input}
            value={password}
            onChangeText={onchangePassword}
          />
          <Button title='Login' onPress={login} style={style.button} />
          <Text></Text>
        </View>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Criar" component={Criar} />
        <Stack.Screen name="Editar" component={Editar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

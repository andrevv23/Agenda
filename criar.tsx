import React, { useEffect, useState } from "react";
import { PostAllRegs } from "./Service";
import { Divider, ListItem} from "react-native-elements";
import { Alert, Button, ImageBackground, Image, ImageComponent, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import style from "./style.module";
import { NavigationProp, useRoute } from '@react-navigation/native';




export default function Criar({ navigation }: { navigation: NavigationProp<any> }){

    const [nome, setNome] = useState('');
    const [fone, setFone] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [descricao, setDescricao] = useState('');
    const onChangeNome = (nome: any) => { setNome(nome) };
    const onchangeFone = (fone: any) => { setFone(fone) };
    const onchangeEmail = (email: any) => { setEmail(email) };
    const onchangeDataNascimento = (dataNascimento: any) => { setDataNascimento(dataNascimento) };
    const onchangeDescricao = (descricao: any) => { setDescricao(descricao) };

    const postAllRegs = async () => {
        const teste = await PostAllRegs(nome, fone, email, dataNascimento, descricao);
        if (true) {
            alert('cadastrado!');
            navigation.navigate('Menu')
        } else {
            alert('erro ao cadasstrar!')
        }
    }

    return (
        <SafeAreaProvider>
        <View style={style.container}>
            <Text style={style.text}>Cadastrar Contato:</Text>
            <TextInput
                placeholder="Nome"
                placeholderTextColor='#000'
                style={style.input}
                value={nome}
                onChangeText={onChangeNome}
            />
            <TextInput
                placeholder="Fone"
                placeholderTextColor='#000'
                style={style.input}
                value={fone}
                onChangeText={onchangeFone}
            />
            <TextInput
                placeholder="E-mail"
                placeholderTextColor='#000'
                style={style.input}
                value={email}
                onChangeText={onchangeEmail}
            />
            <TextInput
                placeholder="Data de nascimento"
                placeholderTextColor='#000'
                style={style.input}
                value={dataNascimento}
                onChangeText={onchangeDataNascimento}
            />
            <TextInput
                placeholder="Descrição"
                placeholderTextColor='#000'
                style={style.input}
                value={descricao}
                onChangeText={onchangeDescricao}
            />
            <Button title='Salvar' onPress={postAllRegs} />
            <Text></Text>
        </View>
    </SafeAreaProvider>
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
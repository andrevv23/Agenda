// 

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { getAllRegs, updateContato, deleteContato } from "./Service";
import { Divider } from "react-native-elements";
import { NavigationProp, useRoute } from '@react-navigation/native';

export default function Menu({ navigation }: { navigation: NavigationProp<any> }) {
    interface Contato {
        id: number,
        nome: string,
        fone: string,
    }

    const [rows, setRows] = useState<Contato[]>([]);

    async function findRegs() {
        const linhas: any = await getAllRegs();
        setRows(linhas);
    }

    async function handleDelete(id:number) {
        console.log("Chamando handleDelete com ID:", id);
        await deleteContato(id);
        findRegs();
    }

    useEffect(() => {
        findRegs();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.selectorHeader}>
                <Text style={styles.text}> Menu </Text>
            </View>
            <Divider />
            {
                rows.map((l) => (
                    <View key={l.id} style={styles.contactItem}>
                        <Text style={styles.text}>{l.nome}, {l.fone}</Text>
                        <Button title="Editar" onPress={() => navigation.navigate('Editar', { contato: l })}/>
                        <Button title="Deletar" onPress={() => handleDelete(l.id)}/>
                    </View>
                ))
            }
            <Divider />
            <Button title='Criar' onPress={() => navigation.navigate('Criar')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    selectorHeader: {
        alignItems: 'center',
        marginBottom: 16,
    },
    text: {
        fontSize: 18,
        marginBottom: 8,
    },
    contactItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },


});

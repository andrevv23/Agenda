// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// // import { updateContato } from './Service';
// import { NavigationProp, RouteProp } from '@react-navigation/native';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// // import style from './style.module';

// // export default function EditarContato({ navigation, route }: { navigation: NavigationProp<any>, route: RouteProp<any> }) {
// //     const {contato} = route.params;
// //     const [nome, setNome] = useState(contato.nome);
// //     const [fone, setFone] = useState(contato.fone);
// //     const [email, setEmail] = useState(contato.email);
// //     const [dataNascimento, setDataNascimento] = useState(contato.dataNascimento);
// //     const [descricao, setDescricao] = useState(contato.descricao);

// //     async function handleSave() {
// //         await updateContato(contato.id, nome, fone, email, dataNascimento, descricao);
// //         navigation.goBack();
// //     }

// //     return (
// //         <View style={styles.container}>
// //             <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Nome" />
// //             <TextInput style={styles.input} value={fone} onChangeText={setFone} placeholder="Telefone" />
// //             <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" />
// //             <TextInput style={styles.input} value={dataNascimento} onChangeText={setDataNascimento} placeholder="Data de Nascimento" />
// //             <TextInput style={styles.input} value={descricao} onChangeText={setDescricao} placeholder="Descrição" />
// //             <Button title="Salvar" onPress={handleSave} />
// //         </View>
// //     );
// // }


// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         padding: 16,
// //     },
// //     input: {
// //         height: 40,
// //         borderColor: 'gray',
// //         borderWidth: 1,
// //         marginBottom: 12,
// //         paddingHorizontal: 8,
// //     },
// // });

// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";
// import { updateContato } from "./Service";
// //import { NavigationProp, RouteProp } from '@react-navigation/native';

// interface EditScreenProps {
//     navigation: NavigationProp<any>;
//     route: RouteProp<{ params: { contato: any } }, 'params'>;
// }

// const EditScreen: React.FC<EditScreenProps> = ({ navigation, route }) => {
//     const { contato } = route.params;

//     const [nome, setNome] = useState(contato.nome);
//     const [fone, setFone] = useState(contato.fone);
//     const [email, setEmail] = useState(contato.email);
//     const [dataNascimento, setDataNascimento] = useState(contato.dataNascimento);
//     const [descricao, setDescricao] = useState(contato.descricao);

//     async function handleUpdate() {
//         await updateContato(contato.id, nome, fone, email, dataNascimento, descricao);
//         navigation.goBack();
//     }

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Nome"
//                 value={nome}
//                 onChangeText={setNome}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Fone"
//                 value={fone}
//                 onChangeText={setFone}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={setEmail}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Data de Nascimento"
//                 value={dataNascimento}
//                 onChangeText={setDataNascimento}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Descrição"
//                 value={descricao}
//                 onChangeText={setDescricao}
//             />
//             <Button title="Salvar" onPress={handleUpdate} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 12,
//         padding: 8,
//     },
// });

// export default EditScreen;


import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { updateContato } from "./Service";
import { useRoute, NavigationProp } from '@react-navigation/native';

export default function Editar({ navigation }: { navigation: NavigationProp<any> }) {
    const route = useRoute();
    const { contato }: any = route.params;

    const [nome, setNome] = useState(contato.nome);
    const [fone, setFone] = useState(contato.fone);
    const [email, setEmail] = useState(contato.email);
    const [dataNascimento, setDataNascimento] = useState(contato.dataNascimento);
    const [descricao, setDescricao] = useState(contato.descricao);

    async function handleSave() {
        await updateContato(contato.id, { nome, fone, email, dataNascimento, descricao });
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
            />
            <Text style={styles.label}>Telefone:</Text>
            <TextInput
                style={styles.input}
                value={fone}
                onChangeText={setFone}
            />
            <Text style={styles.label}>email:</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.label}>Data de Nascimento:</Text>
            <TextInput
                style={styles.input}
                value={dataNascimento}
                onChangeText={setDataNascimento}
            />
            <Text style={styles.label}>Descrição:</Text>
            <TextInput
                style={styles.input}
                value={descricao}
                onChangeText={setDescricao}
            />
            
            <Button title="Salvar" onPress={handleSave} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
    },
});


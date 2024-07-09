import api from "./Api";

export default async function Login(username: any, password: any) {
    try {
        const data = {
            username,
            password
        }
        const response: any = await api.post("/user/login", data);
        if (response.data.auth==="true") {
            return true;
        }else{
            return false;
        }
    } catch (error) {
        alert("Erro de conexão\n" + error);
    }
}

export async function getAllRegs() {
    try {
        const retorno = await api.get("/contacts/getAllContacts");
        console.log("Valores:" + JSON.stringify(retorno.data));
        return retorno.data
    } catch(error){
        alert("Falha ao buscar contatos"+ error);
    }
}

export async function PostAllRegs(nome: any, fone: any, email: any, dataNascimento: any, descricao: any) {
    try {
        const createContato = {
            nome,
            fone,
            email,
            dataNascimento,
            descricao
        };
        const dataNascimentoDate = new Date(dataNascimento);
        const retorno: any = await api.post("/createContato", createContato);
    } catch(error){
        alert("Falha ao criar contado"+ error);
    }
}

export async function deleteContato(id: number) {
    const response = await fetch(`http://192.168.3.10:8080/app-agenda/api/contacts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(`Error deleting contact: ${error}`);
    }

    return await response.json();
}

export async function updateContato(id: number, contato: { nome: any, fone: any, email: any, dataNascimento: any, descricao: any }) {
    try {
        const response = await api.put(`/contacts/${id}`, contato);
        return response.data;
    } catch (error) {
        alert("Falha ao atualizar contato: " + error);
    }
}
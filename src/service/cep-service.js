import axios from "axios";

const baseURL = 'http://viacep.com.br/ws'
const responseFormat = 'json'

const api = axios.create({baseURL});

const MensagemErro = (mensagem) => {
    return {mensagem}
}

const validarEndereco = (logradouro, cidade, uf) => {
    if (!logradouro)
        throw MensagemErro('Informe o logradouro');

    if (!cidade)
        throw MensagemErro('Informe a cidade')
    
    if (!uf)
        throw MensagemErro('Informe o estado')
}

export const buscarEnderecos = async (logradouro, cidade, uf) => {

    validarEndereco(logradouro, cidade, uf)

    try{
        const {data} = await api.get(`${uf}/${cidade}/${logradouro}/${responseFormat}/`);
        return data;
    }catch(error){
        throw MensagemErro(JSON.stringify(error));
    }
};

export const buscarEnderecoPorCep = async (cep) => {
    try{
        const {data} = await api.get(`${cep}/${responseFormat}`);
        return data;
    }catch(error){
        throw MensagemErro(JSON.stringify(error));
    }
}

const cepService = {
    buscarEnderecos,
    buscarEnderecoPorCep
}

export default cepService;
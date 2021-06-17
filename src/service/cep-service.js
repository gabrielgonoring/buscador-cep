import axios from "axios";

const baseURL = 'http://viacep.com.br/ws'
const responseFormat = 'json'

const api = axios.create({baseURL});

const validarEndereco = (logradouro, cidade, uf) => {
    if (!logradouro)
        throw MensagemErro('Informe o logradouro');

    if (!cidade)
        throw MensagemErro('Informe a cidade')
    
    if (!uf)
        throw MensagemErro('Informe o estado')
}

const MensagemErro = (mensagem) => {
    return {mensagem}
}

export const buscarEnderecos = async (logradouro, cidade, uf) => {

    validarEndereco(logradouro, cidade, uf)

    try{
        const {data} = await api.get(`${uf}/${cidade}/${logradouro}/${responseFormat}/`);
        return await data;
    }catch(error){
        throw MensagemErro(JSON.stringify(error));
    }
};


const cepService = {
    buscarEnderecos
}

export default cepService;
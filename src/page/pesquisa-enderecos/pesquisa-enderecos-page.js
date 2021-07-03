import {Component} from 'react';
import ItemEnderecoLista from './component/item-endereco-lista';
import FormularioPesquisaEndereco from './component/formulario-pesquisa-endereco';
import cepService from '../../service/cep-service';
import ResultadoNaoEncontrado from '../../component/resultado-nao-encontrado';
import Cabecalho from '../../component/cabecalho';

export default class PesquisaEnderecosPage extends Component{

  constructor(){
    super();

    this.state = {
      enderecos:[]
    }
  }
  
  async buscarEnderecos(logradouro, cidade, uf){

    try{
      const enderecos = await cepService.buscarEnderecos(logradouro, cidade, uf);
      this.setState({enderecos})
    }catch(error){
      alert(error.mensagem);
    }
  }

  render(){

    const {enderecos} = this.state;

    return(
      <div className='flex-container'>
        <Cabecalho />
        <div className="flex-container pt-3 pb-3 bg-white border-bottom border-1">
          <div className="container">
            <FormularioPesquisaEndereco buscarEnderecos={this.buscarEnderecos.bind(this)} />
          </div>
        </div>
        <div className="container mt-3">
          <div className="row justify-content-center m-5">
            {
              enderecos.length>0 ? enderecos.map((endereco, index) => <ItemEnderecoLista key={index} endereco={endereco} />) :
              <ResultadoNaoEncontrado />
            }
          </div>
        </div>
      </div>
    );
  }
}

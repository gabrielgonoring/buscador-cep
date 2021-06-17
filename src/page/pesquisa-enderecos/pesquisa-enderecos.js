import {Component} from 'react';
import axios from 'axios';
import ItemEnderecoLista from './component/item-endereco-lista';
import FormularioPesquisaEndereco from './component/formulario-pesquisa-endereco';
import cepService from '../../service/cep-service';
import ResultadoNaoEncontrado from '../../component/resultado-nao-encontrado';


export default class PesquisaEnderecos extends Component{

    constructor(){
        super();
    
        this.state = {
          enderecos:[]
        }
      }
    
      async buscarEnderecos(logradouro, cidade, uf){

        try{
          let enderecos = await cepService.buscarEnderecos(logradouro, cidade, uf);
          console.log(enderecos)
          this.setState({enderecos})
        }catch(error){
          alert(error.mensagem);
        }
      }
    
      render(){
    
        let {enderecos} = this.state;

        return(
          <div className="container mt-3">
            <FormularioPesquisaEndereco buscarEnderecos={this.buscarEnderecos.bind(this)}/>
            <div className="row justify-content-center">
              {
                enderecos.length>0 ? enderecos.map((endereco, index) => <ItemEnderecoLista key={index} endereco={endereco} />) :
                 <ResultadoNaoEncontrado />
              }
            </div>
          </div>
        );
      }
      
}

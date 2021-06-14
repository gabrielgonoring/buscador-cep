import {Component} from 'react';
import axios from 'axios';
import ItemEnderecoLista from './component/item-endereco-lista';
import FormularioPesquisaEndereco from './component/formulario-pesquisa-endereco';

export default class PesquisaEnderecos extends Component{

    constructor(){
        super();
    
        this.state = {
          enderecos:[]
        }
      }
    
      buscarEnderecos(logradouro, cidade, uf){

        axios
          .get(`http://viacep.com.br/ws/${uf}/${cidade}/${logradouro}/json/`)
          .then(({data}) => this.setState({enderecos:data}))
          .catch(error => alert(error));
      }
    
      render(){
    
        let {enderecos} = this.state;
        console.log("carregou");

        return(
          <div className="container mt-3">
            <FormularioPesquisaEndereco buscarEnderecos={this.buscarEnderecos.bind(this)}/>
            <div className="row justify-content-center">
              {
                enderecos.map((endereco, index) => <ItemEnderecoLista key={index} endereco={endereco} />)
              }
            </div>
          </div>
        );
      }
      
}

import axios from 'axios';
import {Component} from 'react';
import PesquisaEnderecos from './page/pesquisa-enderecos/pesquisa-enderecos';



export default class App extends Component{

  constructor(){
    super();

  }

  render(){
    return(
      <div>
        <PesquisaEnderecos />
      </div>
    )
  }
}
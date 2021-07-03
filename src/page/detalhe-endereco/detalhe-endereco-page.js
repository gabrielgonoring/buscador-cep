import { Component } from "react";
import Breadcrumb from "../../component/breadcrumb";
import Cabecalho from "../../component/cabecalho";
import DetalheEndereco from "../../component/detalhe-endereco";


export default class DetalheEnderecoPage extends Component {
    
    constructor(props){
        super(props)

        this.cep = this.props.match.params.cep;
        this.caminhosBreadcrumb = [{nome:'Pesquisa endereço', path:'/'}, {nome:'Endereço'}]

    }

    render(){

        return (
            <div className="flex-container">
                <Cabecalho />

                <div className="container pt-3">

                    <Breadcrumb caminhos = {this.caminhosBreadcrumb} />
                    <DetalheEndereco cep={this.cep}/>
                    
                </div>
            </div>
        );
    }
}
import { Component } from "react";
import { ReactComponent as IconeChorando } from '../assets/crying.svg'

export default class ResultadoNaoEncontrado extends Component{
    
    constructor(props){
        super(props)
    }

    obterMensagem(){
        const {mensagem} = this.props;

        return mensagem ? mensagem : 'Não foi encontrado nenhum resultado'
    }

    render(){
        
        const mensagem = this.obterMensagem();

        return (
            <div className='row justify-content-center' >
                <IconeChorando style = {{width: '100px', height:'100px'}}/> 
                <small className='text-center text-muted' >{mensagem}</small>
            </div>
        );
    }
}
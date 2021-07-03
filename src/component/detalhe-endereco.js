import { Component } from "react";
import cepService from "../service/cep-service";
import Loading from './loading';


export default class DetalheEndereco extends Component {
    
    constructor(props){
        super(props)

        this.cep = this.props.cep;
        this.caminhosBreadcrumb = [{nome:'Pesquisa endereço', path:'/'}, {nome:'Endereço'}]

        this.state = {
            endereco: {}
        }
    }

    componentDidMount(){
        this.buscarEnderecoPorCep();
    }

    async buscarEnderecoPorCep(){
        try{
            const endereco = await cepService.buscarEnderecoPorCep(this.cep);
            this.setState({endereco});
        }catch(error){
            alert(error.mensagem)
        }
    }

    render(){

        const {endereco} = this.state;

        if (!endereco.cep) return <Loading />

        return (
            <div className="flex-container">
                    <h2 className="mt-5">{endereco.cep}</h2>
                    <p className='text-secondary'>{endereco.logradouro}</p>
                    <br />
                    <div className=" bg-white p-3 border rounded row row-cols-auto  rounded-3">
                        <div className="col">
                            <p><b>Logradouro</b></p>
                            <p>{endereco.logradouro}</p>
                        </div>
                        <div className="col">
                            <p><b>Bairro</b></p>
                            <p>{endereco.bairro}</p>
                        </div>
                        <div className="col">
                            <p><b>Cidade</b></p>
                            <p>{endereco.localidade}</p>
                        </div>
                        <div className="col">
                            <p><b>Estado</b></p>
                            <p>{endereco.uf}</p>
                        </div>
                        <div className="col">
                            <p><b>Cep</b></p>
                            <p>{endereco.cep}</p>
                        </div>
                        <div className="col">
                            <p><b>Complemento</b></p>
                            <p>{endereco.complemento}</p>
                        </div>
                        <div className="col">
                            <p><b>DDD</b></p>
                            <p>{endereco.ddd}</p>
                        </div>
                        <div className="col">
                            <p><b>IBGE</b></p>
                            <p>{endereco.ibge}</p>
                        </div>
                        <div className="col">
                            <p><b>GIA</b></p>
                            <p>{endereco.gia}</p>
                        </div>
                        <div className="col">
                            <p><b>SIAFI</b></p>
                            <p>{endereco.siafi}</p>
                        </div>
                    </div>
                    <p className="text-end mt-3"> <small>Fonte <a href="https://viacep.com.br/" className="text-secondary"><b>Viacep</b></a></small></p>
        
            </div>
        );
    }
}
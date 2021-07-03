import {Component} from 'react';

export default class ItemEnderecoLista extends Component{

    constructor(props){
        super(props);
    }

    render(){
        let {endereco} = this.props;

        return(
            <div className="card m-2 rounded-3" style={{width : "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title"><b>{endereco.cep}</b></h5>
                    <h6 className="card-subtitle mb-2 text-muted">{endereco.logradouro}</h6>
                    <p className="card-text">{`${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}`}</p>
                    <a href={`/endereco/${endereco.cep.replace(/[^0-9]/g,'')}`} className="card-link text-warning"> <b>Visualizar detalhe</b></a>
                </div>
            </div>
        );
    }
}
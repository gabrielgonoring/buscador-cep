import {Component} from 'react';

export default class FormularioPesquisaEndereco extends Component{
    
    constructor(props){
        super(props);

        this.ufs = ["RO","AC","AM","RR","PA","AP","TO","MA","PI","CE","RN","PB","PE","AL","SE","BA","MG","ES","RJ","SP","PR","SC","RS","MS","MT","GO","DF"];

        this.state ={
            logradouro:"",
            cidade:"",
            uf: this.ufs[0]
        }
    }

    buscarEnderecos(event){
        event.preventDefault();
        
        this.props.buscarEnderecos(this.state.logradouro, this.state.cidade, this.state.uf)
    }

    render(){

        let {logradouro} = this.state;
        let {cidade} = this.state;
        let {uf} = this.state;

        return(
            <form>
                <div className="row">
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                id="logradouro"
                                placeholder="Logradouro"
                                className="form-control"
                                value={logradouro}
                                onChange={(event) => this.setState({logradouro:event.target.value})} 
                                />

                            <label htmlFor="logradouro">Logradouro</label>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                id="cidade"
                                placeholder="Cidade"
                                className="form-control"
                                value={cidade}
                                onChange={(event) => this.setState({cidade:event.target.value})} 
                                />

                            <label htmlFor="cidade">Cidade</label>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="form-floating mb-3">
                            <select className="form-select" id="estado" value={uf} onChange={(event)=> {this.setState({uf:event.target.value})} }>
                                {this.ufs.map((uf, index) => <option key={index} value={uf}>{uf}</option>)}
                            </select>
                            <label htmlFor="estado">Estado</label>
                        </div>
                    </div>
                    <div className="col-md">
                        <button className="btn btn-info btn-lg w-100" type="submit" onClick={(event)=> this.buscarEnderecos(event)}>Buscar</button>
                    </div>
                </div>
            </form>
        );
    }
}
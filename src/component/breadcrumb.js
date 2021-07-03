import { Component } from "react";

export default class Breadcrumb extends Component{

    constructor(props){
        super(props)

        this.caminhos = this.props.caminhos;
    }

    ultimoElemento(index){
        console.log(this.caminhos.length-1, index, this.caminhos.length-1 === index)
        return this.caminhos.length-1 === index;
    }

    render(){
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {
                        this.caminhos.map((caminho, index) => {
                            
                            if(!this.ultimoElemento(index))
                                return(
                                    <li key={index} className="breadcrumb-item"><a className="text-warning" href={caminho.path}><b>{caminho.nome}</b></a></li>
                                );
                            
                            return(
                                <li key={index} className="breadcrumb-item active">{caminho.nome}</li>
                            );
                        })
                    }
                </ol>
            </nav>
        );
    }
}
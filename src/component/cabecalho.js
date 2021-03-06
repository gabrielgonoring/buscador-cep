import { Component } from "react";

export default class Cabecalho extends Component {

    constructor(props){
        super(props)
    }

    render(){

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-1">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Buscador</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        );
    }
}
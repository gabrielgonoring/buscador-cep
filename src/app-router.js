import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PesquisaEnderecosPage from './page/pesquisa-enderecos/pesquisa-enderecos-page';
import DetalheEnderecoPage from './page/detalhe-endereco/detalhe-endereco-page';

export default function AppRouter() {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={PesquisaEnderecosPage} />
                <Route path='/endereco/:cep' component={DetalheEnderecoPage} />
            </Switch>
        </BrowserRouter>
    );
}
import Contato from "../Contato";
import { listaContatos } from "../../Dados/listaContatos";

function Contatos() {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Área</th>
                    <th>E-mail</th>
                    <th>Ramal</th>
                    <th>Editar</th>
                </tr>
            </thead>
            <tbody>
            {listaContatos.map(contato => {
                    return (
                        <Contato nome={contato.nome} area={contato.area} email={contato.email} ramal={contato.ramal}>
                        </Contato>
                    )
                })}
            </tbody>
    </table>
    );
}

export default Contatos;
import { Link } from "react-router-dom";

function Contato({ nome, area, email, ramal }) {
    return (
        <tr>
            <td>{nome}</td>
            <td>{area}</td>
            <td>{email}</td>
            <td>{ramal}</td>
            <td><Link to={`/details/`}><img src="https://icons.getbootstrap.com/assets/icons/pencil.svg" alt="editar"></img></Link></td>
        </tr>
    );
}

export default Contato;
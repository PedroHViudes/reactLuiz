import { NavLink } from "react-router-dom"

export default function Cabecalho() {

    return (<>
        <header>
            <div className="container">
                <nav>
                    <div className="logo">Sistema de Tarefas</div>
                    <ul className="nav-links">
                        <li>
                            <NavLink to="/home" >Início</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Cadastro">Cadastrar Usuário</NavLink>
                        </li>
                        <li>
                            <NavLink to="/CadastroAtividades">Cadastrar Atividade</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Listagem">Listar Tarefas</NavLink>
                        </li>
                        <li><NavLink to="/">Sair</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>

    </>
    )
}

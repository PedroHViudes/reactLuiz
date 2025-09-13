import Cabecalho from "../componentes/Cabecalho";
import Rodape from "../componentes/Rodape";


export default function Home() {
    return (
        <>

            <Cabecalho />


            <main>
                <div className="container">
                    <div id="home-page" className="page active">
                        <div className="card">
                            <h1>Bem-vindo ao Sistema de Gerenciamento de Tarefas</h1>
                            <p>Este sistema permite que você:</p>
                            <ul>
                                <li>Cadastre novos usuários</li>
                                <li>Faça login no sistema</li>
                                <li>Cadastre atividades e tarefas</li>
                                <li>Visualize e gerencie suas tarefas</li>
                            </ul>
                            <p>
                                Use o menu de navegação para acessar as diferentes funcionalidades
                                do sistema.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Rodape />
        </>
    )
}
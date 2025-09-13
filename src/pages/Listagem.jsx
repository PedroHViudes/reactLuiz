import Cabecalho from "../componentes/Cabecalho";
import Rodape from "../componentes/Rodape";

export default function Listagem() {
    return (
        <>
            <Cabecalho />



            <main>
                <div className="container">
                    <div id="tarefas-page" className="page">
                        <div className="card">
                            <h1>Listagem de Tarefas</h1>
                            <table id="tabela-tarefas">
                                <thead>
                                    <tr>
                                        <th>Título</th>
                                        <th>Descrição</th>
                                        <th>Data</th>
                                        <th>Prioridade</th>
                                        <th>Status</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Título atividade</td>
                                        <td>Descrição atividade</td>
                                        <td>Data atividade</td>
                                        <td>prioridad</td>
                                        <td>
                                            <span className="status-"></span>
                                        </td>
                                        <td className="acoes">
                                            <button>Concluir</button>
                                            <button>Excluir</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </main>
            <Rodape />


        </>
    )
}
import Cabecalho from "../componentes/Cabecalho";
import Rodape from "../componentes/Rodape";

export default function Cadastro() {
    return (

        <>
            <Cabecalho />


            <main>
                <div className="container">
                    <div id="cadastro-page" className="page">
                        <div className="card">
                            <h1>Cadastro de Usuário</h1>
                            <form id="usuario-form">
                                <div className="form-group">
                                    <label htmlFor="nome">Nome Completo</label>
                                    <input type="text" id="nome" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="senha">Senha</label>
                                    <input type="password" id="senha" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmar-senha">Confirmar Senha</label>
                                    <input type="password" id="confirmar-senha" required />
                                </div>
                                <button type="button" >
                                    Cadastrar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>


            <Rodape />
        </>
    )
}
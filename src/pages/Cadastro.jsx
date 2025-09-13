import { useState } from "react";
import Cabecalho from "../componentes/Cabecalho";
import Rodape from "../componentes/Rodape";

export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, SetSenha] = useState("");
    const [confirmarsenha, SetConfirmarSenha] = useState("");


    function alterarNome(e) {
        setNome(e.target.value)
    }
    function alterarEmail(e) {
        setEmail(e.target.value)
    }
    function alterarSenha(e) {
        SetSenha(e.target.value)
    }
    function alterarConfirmarSenha(e) {
        SetConfirmarSenha(e.target.value)
    }


    { {/*  OnChange={(e) => SetConfirmarsenha(e.target.value)}*/ } }

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
                                    <input type="text" id="nome" value={nome} onChange={alterarNome} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input type="email" id="email" value={email} onChange={alterarEmail} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="senha">Senha</label>
                                    <input type="password" id="senha" value={senha} onChange={alterarSenha} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmar-senha">Confirmar Senha</label>
                                    <input type="password" id="confirmar-senha" value={confirmarsenha} onChange={alterarConfirmarSenha} required />
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
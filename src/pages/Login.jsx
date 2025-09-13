import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div id="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Login</h1>
          <p>Entre com suas credenciais para acessar o sistema</p>
        </div>
        <form id="login-form">
          <div className="form-group">
            <label htmlFor="login-email">E-mail</label>
            <input type="email" id="login-email" required />
          </div>
          <div className="form-group">
            <label htmlFor="login-password">Senha</label>
            <input type="password" id="login-password" required />
          </div>
          <Link to="/listagem"><button type="button">Entrar</button></Link>
          <p >
            Não tem uma conta?
            <Link to="/cadastro">Cadastre-se aqui</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
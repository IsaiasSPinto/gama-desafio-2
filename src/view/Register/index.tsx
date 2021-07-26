import React from 'react';
import { Header, Section, Footer } from './style';
import Cart from '../../assets/images/cart.svg'
import Logo from '../../assets/images/logo.jpg'
import User from '../../assets/images/user.png'
import { useHistory } from 'react-router-dom';
import Git from '../../assets/images/github.png'


const Register: React.FC = () => {
    const history = useHistory()

    function Products() {
        return history.push('/')
    }


    const handleSubmit = (event: any) => {
        event.preventDefault();

        var nome: string = event.target.nome.value
        var email: string = event.target.email.value
        var tel: number = event.target.tel.value
        var data: number = event.target.date.value
        var senha: string | number = event.target.senha.value


        let values: (string | number)[] = []

        values.push(nome)
        values.push(email)
        values.push(tel)
        values.push(data)
        values.push(senha)

        const valuesLocal = JSON.stringify(values)

        localStorage.setItem('@Clientes', valuesLocal)

        return (
            history.push('/'),
            alert("Usuario Cadastrado!")

        )

    }

    return (
        <>
            <Header>
                <img onClick={Products} src={Logo} alt="logo do site" />
                <nav className="nav-buttons">
                    <img onClick={Products} className="img-buttons" src={Cart} alt="" />
                    <img className="img-buttons" src={User} alt="" />
                </nav>
            </Header>
            <Section>
                <h1>Cadastre-se</h1>

                <main>
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="nome">Nome: </label>
                        <input id="nome" type="text" name="nome" required />

                        <label htmlFor="email">E-mail: </label>
                        <input id="email" type="email" name="email" required />

                        <label htmlFor="tel">Telefone: </label>
                        <input id="tel" type="tel" name="tel" required />

                        <label htmlFor="data">Data de Nascimento: </label>
                        <input id="data" type="date" name="date" required />

                        <label htmlFor="password">Senha: </label>
                        <input id="password" type="password" name="senha" required />

                        <input id="cadastrar" type="submit" value="Cadastrar" />

                    </form>
                </main>
            </Section>
            <Footer>

                <div className="wrapper">
                    <span>Deselvovido pro Isaias Pinto</span>
                    <a href="https://github.com/IsaiasSPinto" target="_blank" rel="noreferrer"><img width="80%" src={Git} alt="icone Git hub" /></a>
                </div>


                <span>Desafio #2 Gama Academy</span>


            </Footer>
        </>
    )
}

export default Register;

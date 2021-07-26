import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';

import api from '../../services/api'

import { Container, Header, Footer } from './style';
import Cart from '../../assets/images/cart.svg'
import Bag from '../../assets/images/bag.svg'
import Logo from '../../assets/images/logo.jpg'
import User from '../../assets/images/user.png'
import Git from '../../assets/images/github.png'

interface Iproduct {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}



const Home: React.FC = () => {

    const history = useHistory()

    const [data, setData] = useState<Iproduct[]>([]);
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    const handleCart = (index: number) => {

        const productsStore = JSON.stringify(data[index])
        localStorage.setItem(`@Produto-${index}`, productsStore)

    }

    function Register() {
        return history.push('/Register')
    }



    return (
        <>
            <Header>
                <img src={Logo} alt="logo do site" />
                <nav className="nav-buttons">
                    <img className="img-buttons" src={Cart} alt="" />
                    <img onClick={Register} className="img-buttons" src={User} alt="" />
                </nav>
            </Header>
            <Container>
                <section>
                    {data.map((prod, index) => (
                        <div className="product-content" key={prod.id}>
                            <img src={prod.image} alt="iphone img" width="200" height="auto" />
                            <h4>{prod.name}</h4>
                            <span>{prod.description}</span>
                            <h6>R$ {prod.price},00</h6>
                            <div className="buttons">
                                <img width="15%" onClick={() => handleCart(index)} src={Cart} alt="" />
                                <img onClick={Register} width="15%" src={Bag} alt="" />
                            </div>
                        </div>
                    ))}

                </section>
            </Container>
            <Footer>

                <div className="wrapper">
                    <span>Deselvovido pro Isaias Pinto</span>
                    <a href="https://github.com/IsaiasSPinto" target="_blank" rel="noreferrer"><img width="80%" src={Git} alt="icone Git hub" /></a>
                </div>


                <span>Desafio #2 Gama Academy</span>

            </Footer>

        </>
    );
}

export default Home;

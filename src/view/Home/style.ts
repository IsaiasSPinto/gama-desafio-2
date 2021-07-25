import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    margin: auto;

    section {
        height: 86vh;
        width: 100%;
        background-color: #A6C5DE;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 25px 0 25px;
        display: grid;
        grid-template-columns: 250px 250px 250px 250px;
    
    }

    .product-content {
        font-family: 'Poppins';
        display: grid;
        text-align: center;
        height: 350px;
        background: #FFF;
        border-radius: 12px;
        padding: 12px;

        img {
            justify-self: center;
            transition: 300ms ease-in-out;
        }

        img:hover {
            transform: scale(1.1);
        }
    }
   

    .buttons {
        display: flex;
        justify-content: space-around;
        
        img {
            cursor: pointer;
        }
    }
`

export const Header = styled.header`
    display: flex;
    width: 100%;
    background-color: #1B2024;
    height: 9vh;
    align-items: center;
    justify-content: space-between;
   
    
    img {
        height: 9vh;
        margin-left: 30px;
        cursor: pointer;
    }

    .nav-buttons {
        display: flex;
        flex-direction: row;
        height: 7vh;
        align-items: center;
        margin-right: 30px;
    }

    .img-buttons {
        height: 5vh;
        cursor: pointer;
    }

`

export const Footer = styled.footer`
    font-family: 'Poppins';
    background-color: #1B2024;
    display: flex;
    height: 5vh;
    align-items: center;
    gap: 20px;
    padding-left: 15px;
    padding-right: 15px;
    justify-content: space-between;

    .wrapper {
        display: flex;
        height: 5vh;
        align-items: center;
        gap: 20px;
    }
`

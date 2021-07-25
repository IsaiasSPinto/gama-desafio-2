import styled from "styled-components";

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

export const Section = styled.section`
    background-color: #A6C5DE;
    width: 100%;
    height: 86vh;
    font-family: 'Bebas Neue';
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;

    h1 {
        font-size: 50px;
    }

    .form {
        display: flex;
        flex-direction: column;
        font-family: 'Poppins';
        gap: 10px;
        width: 50vw;
        align-items: center;

    
        
        label {
            align-self: center

        }
        input {
            max-width: 500px;
            width: 100%;
            height: 30px;
            border-radius: 5px;
        }

        #cadastrar {
            cursor: pointer;
            color: white;
            background-color:#1B2024 ;
        }

        #cadastrar:hover{ 
            transform:scale(1.06)
        }

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


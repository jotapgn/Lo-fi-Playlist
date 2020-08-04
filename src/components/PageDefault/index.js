import React from 'react';
import  { Header, Wrapper } from '../Header';
import Logo from '../Logo'
import LogoImersao from '../LogoImersao'
import Footer from '../Footer'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;

`;


function PageDefault({ children }) {
    return (
        <>
            <Header>
                <Wrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                </Wrapper>
            </Header>
            <Main>
            {children}
            </Main>

            <Footer>
                <Logo />
                <p>
                    Site made in <a href="https://www.alura.com.br"><LogoImersao /></a></p>
            </Footer>
        </>
    )

}
export default PageDefault;
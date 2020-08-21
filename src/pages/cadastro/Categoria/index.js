import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import H1 from '../../../components/H1'
import useForm from '../../../hooks/useForm'
import categoriasRepository from '../../../repositories/categorias'
import { Header, Wrapper } from '../../../components/Header'
import Footer from '../../../components/Footer'
import Logo from '../../../components/Logo'
import LogoImersao from '../../../components/LogoImersao'
import Main from '../../../components/Main'
import Button from '../../../components/Button'
import SaveButton from '../../../components/SaveButton'
import Span from '../../../components/Span'


function CadastroCategoria() {
    const history = useHistory();
    const valoresIniciais = {
        titulo: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);

    const {handleChange, values, clearForm} = useForm(valoresIniciais)
    

   
    useEffect(() => {
        if(window.location.href.includes('localhost')) {
          const URL = 'http://localhost:8080/categorias'; //https://lo-fi-playlist.herokuapp.com/categorias
          fetch(URL)
           .then(async (respostaDoServer) =>{
            if(respostaDoServer.ok) {
              const resposta = await respostaDoServer.json();
              setCategorias(resposta);
              return; 
            }
            throw new Error('Não foi possível pegar os dados');
           })
        }    
      }, []);
    // useEffect(() =>{
    //     setTimeout(() =>{
    //         const URL_BD = "http://localhost:8080/categorias";
    //         fetch(URL_BD).then(async (serverResponse) =>{
    //             const response = await serverResponse.json();
    //             setCategorias([
    //                 ...response,
    //             ])
    //         })
    // }, 4 * 1000);
    // }, []);

    return (
        <div>
            <Header>
                <Wrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <Button as={Link} to="/cadastro/video">New Video</Button>
                </Wrapper>
            </Header>
            <Main>
                <H1>Add new Tag: {values.titulo}</H1>
                <form onSubmit={function handleSubmit(eventInfo) {
                    eventInfo.preventDefault();
                    setCategorias([
                        ...categorias,
                        values
                    ]);

                    clearForm(valoresIniciais)
                    categoriasRepository.create({
                        titulo: values.titulo,
                        cor: values.cor,
                    })
                        .then(() =>{
                            history.push('/');
                            console.log('Cadastrado com suscesso')
                        });

                }}>
                <FormField
                    label="Title"
                    type="text"
                    value={values.titulo}
                    name="titulo"
                    onChange={handleChange}
                    
                    />
                <FormField
                    label="Color"
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handleChange}
                    
                />
                    <Link to="/"  style={{ textDecoration: 'none' }}>
                <Span> Back to Homepage</Span>
            </Link>
            <SaveButton type="submit">
                Save
            </SaveButton>
                </form>
                
                {/* {categorias.length === 0 &&(
                <div>
                    Loading....
                </div>
                )}
                <ul>
                    {categorias.map((categoria, indice) => {
                        return (
                            <li key={`${categoria}${indice}`}>
                                {categoria.titulo}
                            </li>
                        )
                    })}
                </ul> */}
            </Main>
                <Footer>
                <Logo />
                <p>
                    Site made in <a href="https://www.alura.com.br"><LogoImersao /></a></p>
            </Footer>
            </div>
    )
}

export default CadastroCategoria;
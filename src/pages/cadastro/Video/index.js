import React, { useEffect, useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import H1 from '../../../components/H1'
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'
import { Header, Wrapper } from '../../../components/Header'
import Footer from '../../../components/Footer'
import Logo from '../../../components/Logo'
import LogoImersao from '../../../components/LogoImersao'
import Main from '../../../components/Main'
import SaveButton from '../../../components/SaveButton'
import Span from '../../../components/Span'

function CadastroVideo() {
    const history = useHistory();
    const [categorias, setCategorias] = useState([]);
    const categoryTitles = categorias.map(({titulo}) => titulo)
    const { handleChange, values } = useForm({
        titulo: '',
        url: '',
        categoria: '',

    })

    useEffect(() =>{
        categoriasRepository
            .getAll()
            .then((categoriasFromServer) =>{
                setCategorias(categoriasFromServer)

            })
    },[])

    return (
        <div>
            <Header>
                <Wrapper>
                    <Link to="/">
                        <Logo />
                    </Link>
                    <Button as={Link} to="/cadastro/categoria">New Tag</Button>
                </Wrapper>
            </Header>
            <Main>
            <H1>Cadastro de Video</H1>

            <form onSubmit={(event) => {
                event.preventDefault();

                const categoriaEscolhida = categorias.find((categoria) => {
                    return categoria.titulo === values.categoria;
                })

                videosRepository.create({
                    titulo: values.titulo,
                    url: values.url,
                    categoriaId: categoriaEscolhida.id,
                })
                    .then(() =>{
                        history.push('/');
                        console.log('Cadastrado com suscesso')
                    });
            }}> 
            <FormField
                    label="Título do Vídeo "
                    value={values.titulo}
                    name="titulo"
                    onChange={handleChange}
                    
                    />
            <FormField
                    label="URL"
                    value={values.url}
                    name="url"
                    onChange={handleChange}
                    
                    />
            <FormField
                    label="Categoria"
                    value={values.categoria}
                    name="categoria"
                    onChange={handleChange}
                    suggestions={categoryTitles}
                    
                    />

            <Link to="/"  style={{ textDecoration: 'none' }}>
                <Span> Back to Homepage</Span>
            </Link>
            <SaveButton type="submit">
                Cadastrar
            </SaveButton>
            </form>

            </Main>
            <Footer>
                <Logo />
                <p>
                    Site made in <a href="https://www.alura.com.br"><LogoImersao /></a></p>
            </Footer>
            
        </div>
    )
}

export default CadastroVideo;
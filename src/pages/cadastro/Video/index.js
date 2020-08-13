import React, { useEffect, useState} from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import H1 from '../../../components/H1'
import videosRepository from '../../../repositories/videos'
import categoriasRepository from '../../../repositories/categorias'

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
            <PageDefault>
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

            <Button type="submit">
                Cadastrar
            </Button>
            </form>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>

            </PageDefault>
            
        </div>
    )
}

export default CadastroVideo;
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm'

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
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
            <PageDefault>
                <h1>Cadastro de Categoria: {values.nome}</h1>
                <form onSubmit={function handleSubmit(eventInfo) {
                    eventInfo.preventDefault();
                    setCategorias([
                        ...categorias,
                        values
                    ]);

                    clearForm(valoresIniciais)

                }}>
                <FormField
                    label="Nome"
                    type="text"
                    value={values.nome}
                    name="nome"
                    onChange={handleChange}
                    
                    />
                <FormField
                    label="descricao"
                    type="textarea"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChange}
                    
                    />
                <FormField
                    label="cor"
                    type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handleChange}
                    
                />
                {/* <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                            />
                    </label>
                </div> */}
                {/* <div>
                    <label>
                        Cor:
                        <input
                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}
                            />
                    </label>
                </div>     */}
                    <button>
                        Cadastrar
                    </button>
                </form>
                
                {categorias.length === 0 &&(
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
                </ul>
                <Link to="/">
                    Ir para home
                </Link>
            </PageDefault>
    )
}

export default CadastroCategoria;
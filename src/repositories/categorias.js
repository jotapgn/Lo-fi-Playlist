import config from '../config'

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`

function getAll(){
    return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            return resposta; 
          }
          throw new Error('Não foi possível pegar os dados');
         })
}

function getAllWithVideos(){
    return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            return resposta; 
          }
          throw new Error('Não foi possível pegar os dados');
         })
}

function create(objetoCategorias){
    return fetch(`${URL_CATEGORIES }?_embed=videos`,{
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(objetoCategorias),
    })
    .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            return resposta; 
          }
          throw new Error('Não foi possível cadastrar os dados');
         })
}


export default{
    getAllWithVideos,
    getAll,
    create 
}
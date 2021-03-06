import React, { useEffect, useState } from 'react';
import { Header, Wrapper } from '../../components/Header'
import Logo from '../../components/Logo';
import Button from '../../components/Button'
import FooterHome from '../../components/FooterHome'
import LogoImersao from '../../components/LogoImersao'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
import categoriasRepository from '../../repositories/categorias'
import Loading from '../../components/Loading'
// import dadosIniciais from '../../data/initial_data.json'


function Home() {

  const [dadosIniciais, setDadosIniciais] = useState([])

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos[0].videos[0])
        setDadosIniciais(categoriasComVideos)
      })
      .catch((err) => {
        console.log(err.message);
      });

  }, []);

  return (
    <div>
      <Header>
        <Wrapper>
          <Link to="/">
            <Logo />
          </Link>
          <Button as={Link} to="/cadastro/video">New Vídeo</Button>
        </Wrapper>
      </Header>
      {dadosIniciais.length === 0 && (<Loading />)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription={"Musics Sozinho from Caetano Veloso, with dialogues from the movie Her (2013)"}
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
      <FooterHome>
        <Logo />
        <p>
          Site made in <a href="https://www.alura.com.br"><LogoImersao /></a></p>
      </FooterHome>
    </div >
  );
}

export default Home;

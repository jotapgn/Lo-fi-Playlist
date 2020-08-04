import React from 'react';
import  { Header, Wrapper } from '../../components/Header'
import Logo from '../../components/Logo';
import Button from '../../components/Button'
import FooterHome from '../../components/FooterHome'
import LogoImersao from '../../components/LogoImersao'
import BannerMain from '../../components/BannerMain'
import dadosIniciais from '../../data/initial_data.json'
import Carousel from '../../components/Carousel';
import { Link } from 'react-router-dom';
//import Link from './components/Link'
//import HighLight from './components/HighLight'
//import { Banner, Text } from './components/Banner'
//import Tag from './components/Tag'
//import Title from './components/Title'
//import Description from './components/Description'
//import Thumbnail from './components/Thumbnail'
//import thumb1 from './assets/img/thumb1.jpg'

function Home() {
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
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Musics Sozinho from Caetano Veloso, with dialogues from the movie Her (2013)"}
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />      

      {/*<Banner>
        <Text>
        <Tag>Front End</Tag>
        <Title>Sozinho - Caetano Veloso [lofi remix]</Title>
        <Description>Musics Sozinho from Caetano Veloso, with dialogues from the movie Her (2013)</Description>
        </Text>
        
        <Thumbnail src={thumb1} alt="thumbnail Sozinho - Caetano Veloso [lofi remix]"></Thumbnail>
      </Banner>*/}


      <FooterHome>
        <Logo />
        <p>
          Site made in <a href="https://www.alura.com.br"><LogoImersao /></a></p>
      </FooterHome>
    </div>
  );
}

export default Home;
import styled from 'styled-components';
import logo from '../../assets/img/logo.png'


const Logo = styled.img.attrs({src: logo, alt: 'Logo Lo-FI PLaylist'})`
    max-width: 168px;
    @media (max-width: 800px) {
      max-width: 105px;
    }

`;

export default Logo;

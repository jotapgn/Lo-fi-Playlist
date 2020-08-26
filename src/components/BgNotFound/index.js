import styled from 'styled-components';
import foto from '../../assets/img/404.png'


const BgNotFound = styled.img.attrs({src: foto, alt: 'Logo Lo-FI PLaylist'})`
@media (max-width: 800px) {
  max-width: 105px;
}

`

export default BgNotFound;
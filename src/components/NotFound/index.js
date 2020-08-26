import styled from 'styled-components';
import foto from '../../assets/img/404.png'

const NotFound = styled.div`
background-image: url(${foto});
position: absolute;
width: 100%;
height: 100%;
background-size: cover;
@media(max-width:800px){
    height: 80%;
}
 
`

export default NotFound;
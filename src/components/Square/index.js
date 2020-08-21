import styled from 'styled-components';

const Square = styled.div`
width: 588px;
height: 385px;
border: 10px solid #5E1BC1;
text-align:center;
margin: 25px auto;
@media(max-width: 800px){
    margin: 25px auto;
    width: 221px;
    height: 180px;
}


`;

export default Square;
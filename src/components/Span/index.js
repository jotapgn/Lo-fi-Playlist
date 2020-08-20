import styled from 'styled-components'

const Span = styled.span`
width: 250px;
height: 54px;
margin-left:570px;
margin-bottom:20px;
text-decoration: none;
font-style: normal;
font-weight: 600;
font-size: 21px;
line-height: 24px;
position: relative;
align-items: center;
text-align: center;
color: #2A7AE4;
&:hover{
    text-decoration-line: underline;
}
@media(max-width:800px){
    display:none;
}

`

export default  Span;
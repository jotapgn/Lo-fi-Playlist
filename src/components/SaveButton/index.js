import styled from 'styled-components'

const SaveButton = styled.button`
    background-color: #2A7AE4;
    color: var(--white);
    border: 1px solid #2A7AE4;
    box-sizing: border-box;
    cursor: pointer;
    width: 191px;
    padding: 12px ;
    font-style: normal;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    margin-top: 20px;
    margin-left: 100px;
    &:hover,
    &:focus {
        opacity: .5;
    }
`

export default SaveButton;
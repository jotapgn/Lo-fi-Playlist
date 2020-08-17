import styled from 'styled-components';

const Button = styled.button`
    background-color: var(--black);
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    width: 137px;
    padding: 12px ;
    font-style: normal;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
        opacity: .5;
    }

`

export default Button;
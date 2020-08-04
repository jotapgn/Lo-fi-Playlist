import styled from 'styled-components';
//import Logo from '../Logo'

const Footer = styled.footer`
  background: var(--black);
  border-top: 4px solid var(--primary);
  position: fixed;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  width: 100%;
    bottom: 0;
    left: 0;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }

`;

export default Footer


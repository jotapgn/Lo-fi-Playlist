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
    position:relative;
    margin-bottom: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 12px;
    padding-right: 12px;
    bottom: 0;
    left: 0;
    right: 0;
  }

`;

export default Footer


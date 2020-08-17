import styled from 'styled-components';
import Button from '../Button';
import Logo from   '../Logo';
import container from '../../tools/container';

export const Header = styled.header`
    width: 100vw;
    padding: 20px 30px;
    background: var(--black);
    border-bottom: 4px solid var(--primary);

    @media(max-width: 800px){
        padding: 15px 16px;

        
    }

`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${container};
    @media(max-width: 800px){
        justify-content: center;
    
    & > ${Logo}{
            height: 30px;
        }

        & > ${Button}{
            background-color: var(--primary);
            border-radius: 0;
            border: 0;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            text-align: center;
            z-index: 52;
        }
    }
    
`;

export default Header;
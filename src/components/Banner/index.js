import styled from 'styled-components';
import container from '../../tools/container';
import Tag from '../Tag';
import Title from '../Title';

export const Banner = styled.section`
    ${container}
    align-items: center;
    display: flex;
    justify-content: space-between;
    max-height: 70vh;
    height: 100vh;
    
`;

export const Text = styled.div`
    padding-top: 10px;
    max-width: 45%;
    ${Tag}{
        margin-bottom: 40px;
    }
    ${Title}{
        margin-bottom: 20px;
    }

`;


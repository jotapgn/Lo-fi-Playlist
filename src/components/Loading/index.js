import styled from 'styled-components';

const Loading = styled.div`
  border: 16px solid #121212;
  border-radius: 50%;
  border-top: 16px solid #7535D4;
  width: 100px;
  height: 100px;
  margin-top: 250px;
  margin-bottom: 250px;
  margin-left: auto;
  margin-right: auto;
  animation: spin 2s linear infinite;
   -webkit-animation: spin 2s linear infinite;
   @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
    }
@media(max-width:800px){
    margin-top: 150px;
    margin-bottom: 150px;
}

`;

export default Loading;
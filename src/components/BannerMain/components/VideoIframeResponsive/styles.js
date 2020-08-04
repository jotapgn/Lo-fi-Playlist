import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 4px;
  border: 4px solid var(--frontEnd);
  padding-top: 56.25%;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
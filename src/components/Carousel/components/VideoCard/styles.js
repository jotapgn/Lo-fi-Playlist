import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 190px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity .3s;
  &:hover,
  &:focus {
    transform: scale(0.98);
		box-shadow: 0 0 0 1px var(--white);
		outline: none;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
  .videoTitle span{
    font-size: 14px;
    width: 100%;
    font-weight: 900px;
    letter-spacing: 2px;
    text-align:center;
  }
  .videoTitle {
    align-items:center;
    border-top-left-radius:4px;
    border-bottom-left-radius:4px;
    width: 100vw;
    height: 40px;
    padding: 10px 10px;
    color: var(--white);
		transform: translateX(55px);
		transition: transform linear 500ms;
		opacity: 0;
	}
	&:hover .videoTitle,
	&:focus .videoTitle {
		transform: translateX(17px);
		opacity: 1;
		@media (max-width: 800px) {
			display: none;
    }
  } 
`;
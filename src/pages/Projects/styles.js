import styled from 'styled-components';
import { shade } from 'polished';

export const Content = styled.div`
  height: 800px;
  margin-top: 160px;
  width: 100%;
  max-width: 1400px;
  -webkit-box-align: center;

  align-items: center; 
  justify-content: center;

  h1 {
    font-weight: bolder;
    font-size: 4.375em;
  }

  button {
    width: 250px;
    height: 70px;

    background: #D40000;
    border-color: transparent;
    font-size: 20px;
    color: #fafafa;
    border-radius: 10px;
    transition: 0.2s;
    margin-top: 2%;

    &:hover {
      background: ${shade(0.2, '#D40000')};
    }
  }

  span {
    font-size: 1.25em;
  }
`;

export const CardDeck = styled.div`
  width: 100%;
  margin-top: 4%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3332;

  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  
  &:hover {
    transform: translateY(-7px);
  }
`;

export const CardBody = styled.div`
  margin: 20px;
  > h3 {
    font-size: 1.4375em;
    color: #fafafa;
    margin-bottom: 20px;
  }
  > p {
    margin-bottom: 10px;
    font-size: 1.0rem;
    line-height: 1.6rem;
    font-weight: 400;
    color: #fafafa;
  }
  > a {
    color: #fafafa;
    font-size: 1.1875em;
    font-weight: bolder;

    &:hover {
      text-decoration: none;
      color: #D40000;
    }
  }

  span {
    margin-top: 2px;
    &:hover {
      color: #D40000;
    }
  }

  span + span {
    margin-left: 90px;
  }
`;

export const Image = styled.div`
  width: 100%;
  padding-top: 57%;

  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
  }
`;
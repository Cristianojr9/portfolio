import styled from 'styled-components';
import { shade } from 'polished';

export const Content = styled.div`
  height: 800px;
  margin-top: 5%;
  width: 100%;
  max-width: 1400px;
  -webkit-box-align: center;

  display: grid;
  align-items: center; 
  justify-content: center;

  transition: 1.2s;

  h1 {
    font-weight: bolder;
    font-size: 70px;
    width: 1000px;
  } 

  section {
    display: flex;
    justify-content: row;
    align-items: center;
    margin-top: -10%;
    img {
      max-width: 25%;
      border-radius: 10%;
      position: relative;
      margin-right: 5%;
      margin-left: 5%;
      margin-top: -10%;
    }
    span { 
      font-size: 20px;
      margin-top: -4%;
    }
  }

  a {
    margin-top: -10%;
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

    &:hover {
      background: ${shade(0.2, '#D40000')};
    }
  }
`;
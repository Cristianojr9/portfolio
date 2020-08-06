import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  height: 800px;
  margin-top: 5%;
  width: 100%;
  max-width: 1400px;
  margin-left: 0px;
  -webkit-box-align: center;

  display: flex;
  align-items: center; 
  justify-content: center;

  ul li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70px;
    height: 120px;
    cursor: pointer;
    margin-left: 50px;

    transition: 0.2s;
      
    &:hover {
      color: #D40000;
    }
  }

  section {
    box-sizing: border-box;

    span {
      font-size: 35px;
      font-weight: lighter;
    }

    p {
      font-size: 1.25em;
      margin-top: 0;
    }

    img {
      padding: 0px auto;
      margin: 0px auto;
      margin-left: 10px;
    }
  }

  h2 {
    font-size: 80px;
    overflow: hidden; 
    border-right: .15em solid #D40000; 
    white-space: nowrap; 
    margin: 0 auto;
    font-weight: bolder; 
    animation: 
      /* animated-text 4s linear 1s 1 normal both, */
      blink-caret .5s step-end infinite;

    /* @keyframes animated-text {
      from{width: -10px;}
      to{width: 100%;}
    } */

    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #D40000 }
    }
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

  a {
    transform: rotate(90deg);
    font-size: 19px;
    cursor: pointer;
    transition: 0.2s;
    font-weight: lighter;
    color: #fafafa;
    text-decoration: none;

    &:hover {
      color: ${shade(0.2, '#D40000')};
    }
  }
`;
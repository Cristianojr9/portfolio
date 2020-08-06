import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
  top: 0px;
  width: 100%;

  max-width: 1400px;

  section {
    max-width: 1400px;
    width: 100%;
    box-sizing: border-box;

    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;
    
    padding: 0px 16px;
    margin-top: 50px;

    span {
      font-weight: bolder;

      cursor: default;
      color: #fafafa;
      margin-top: -15px;
    }

    ul {
      display: flex;
      
      li {

        font-size: 20px;
        list-style: none;

        a {
        text-decoration: none;
        color: #fafafa;
        font-weight: bolder;
        padding: 24px;
        transition: all 250ms linear 0s;
          &:hover {
            color: #D40000;
          }
        }
      }
    }
  }
`;
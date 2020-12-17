import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 15%;
  justify-content: space-between;
  align-items: center;
  background-color: #993399;
  padding: 40px;

  div {
    display: flex;
    justify-content: flex-start;
  }

  nav {
    display: flex;
    width: 30%;
    justify-content: space-between;

    a {
      color: white;
      font-size: 20px;

      :hover {
        background-color: #ff00ff;
        padding: 5px;
      }
    }

    button {
      background-color: #ff00ff;
      padding: 10px;
    }
  }
`;

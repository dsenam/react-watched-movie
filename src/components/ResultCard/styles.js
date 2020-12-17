import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  align-items: center;
  background-color: #fff;
  margin-top: 15px;
  border: 1px solid #fff;

  img {
    height: 100%;
    width: 30%;
    margin-right: 10px;
  }

  h2 {
    margin: 0px 10px;
    color: #dcdcdc;
    width: 30%;
  }

  div {
    margin: 10px;

    h1 {
      margin-bottom: 20px;
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: green;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      color: #fff;
      font-weight: bold;
    }

    span {
      background-color: yellow;
      padding: 5px;
      font-weight: bold;
    }

    h3 {
      color: #dcdcdc;
      font-size: 14px;
      margin-top: 10px;
      margin-left: 5px;
    }

    button {
      background-color: #993399;
      color: #fff;
      margin-top: 30px;
      padding: 20px;
    }
  }
`;

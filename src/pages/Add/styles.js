import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;

  input {
    width: 35%;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #993399;
    font-size: 20px;

    ::placeholder {
      font-size: 20px;
      color: #dcdcdc;
    }
  }
`;

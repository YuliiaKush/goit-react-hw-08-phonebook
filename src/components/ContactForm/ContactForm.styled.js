import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormName = styled.input`
  display: flex;
  flex-direction: column;
  margin: 0.5rem auto;
  align-items: center;
  font-size: large;
  text-align: left;
  padding: 0.5rem 15rem 0.5rem 1rem;
`;

export const FormNumber = styled.input`
  display: flex;
  flex-direction: column;
  margin: 0.5rem auto;
  align-items: center;
  font-size: large;
  text-align: left;
  padding: 0.5rem 15rem 0.5rem 1rem;
`;

export const FormBtn = styled.button`
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: rgb(0, 123, 255);
  border: none;
  border-radius: 6px;
  color: #fff;
  flex-grow: 1;
  font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
  font-size: 15px;
  height: 36px;
  line-height: 20px;
  margin-left: 8px;
  margin-right: 6px;
  min-width: 185px;
  padding: 0 16px 0 16px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
    cursor: pointer;
  }
`;
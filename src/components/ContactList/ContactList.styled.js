import styled from 'styled-components';

export const ContactListUl = styled.ul`
  background-color: white;
  color: black;
`;

export const ContactListItemBtn = styled.button`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  align-items: right;
  background-color: rgb(244, 67, 54);
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
  min-width: 50px;
  padding: 0 16px 0 16px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
    cursor: pointer;
  }
`;
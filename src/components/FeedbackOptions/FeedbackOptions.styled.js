import styled from '@emotion/styled/macro';

export const Button = styled.button`
  padding: 5px;
  background-color: #fff;

  font-size: 16px;
  font-weight: 600;

  border-radius: 4px;
  border: 1px solid #283655;
  color: #283655;

  cursor: pointer;

  transition: all 300ms linear;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #4d648d;
    color: white;
  }
`;

export const BtnWrapper = styled.div`
  align-items: center;
`;

import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 300px;
  height: 100%;
  display: block;
  padding: 20px;
  border-radius: 4px;
  text-align: center;

  /* margin: 0 auto; */

  background-color: #d0e1f9;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.p`
  margin: 0;
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 600;

  color: #283655;
`;

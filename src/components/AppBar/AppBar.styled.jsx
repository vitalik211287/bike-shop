import styled from '@emotion/styled';

export const AppBarBox = styled.div`
  min-width: 290px;
  width: auto;
  height: auto;
  min-height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #adadad;
  margin: 25px 15px 0 15px;
  @media only screen and (min-width: 320px) {
  }
  // width: 320px;
  @media only screen and (min-width: 1600px) { 
    justify-content: flex-start;
  }
`;

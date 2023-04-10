import styled from '@emotion/styled';

export const BikeDeteilsBox = styled.div`
  margin: 71px 45px 71px 45px;
`;

export const Ul = styled.ul`
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Li = styled.li`
  background: #ffffff;
  border-radius: 12px;
  width: 290px;
  height: 373px;
  margin-bottom: 25px;
  margin-right: 0;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.1);
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    // width: 290px;
    // height: 373px;
    background: #ffffff;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    margin-right: 30px;
    margin-right: 0;
    &:nth-of-type(2n + 1) {
      margin-right: 30px;
    }
  }
  @media only screen and (min-width: 1600px) {
    width: 457px;
    height: 379px;
    margin-bottom: 39px;
    margin-right: 39px;
    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }
`;
export const Section = styled.section`
  padding: 25px 15px 25px 15px;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 768px) {
    padding: 109px 75px 45px 75px;
  }
  @media only screen and (min-width: 1600px) {
  } ;
`;

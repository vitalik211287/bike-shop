import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BikeDeteilsBox = styled.div`
  margin: 71px 45px 71px 45px;
`;

export const Ul = styled.ul`
  width: 100%;
  @media only screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Li = styled.li`
  position: relative;
  background: #ffffff;
  border-radius: 12px;
  // width: 260px;
  // height: 100%;
  // margin-bottom: 25px;
  // margin-right: 0;
  margin: 25px auto 0 auto;
  display: flex;
  padding: 25px 15px 40px 15px;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
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

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 36px;
`;
export const DivBox = styled.div`
  display: flex;
`;

export const TextPrice = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 124.32%;
  /* identical to box height, or 20px */

  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: #000000;
`;
export const ColorSpane = styled.span`
  width: 32px;
  height: 32px;
  border: 1px solid black;
  border-radius: 50%;
  margin-bottom: 36px;
`;
export const DivColorLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

`;
export const NaVlink = styled(NavLink)`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 124.32%;
/* or 22px */

letter-spacing: 0.04em;
text-transform: uppercase;

color: #000000;


`;

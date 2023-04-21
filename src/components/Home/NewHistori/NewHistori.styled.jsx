import styled from '@emotion/styled';
import background from './background.png';

export const Section = styled.section`
  min-height: 615px;
  background-image: url('${background}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 39px 25px 60px 25px;
`;
export const Text = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 146.99%;
  letter-spacing: 0.04em;
  color: #ffffff;
  padding-bottom: 37px;
`;
export const H2 = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 124.32%;
  padding-bottom: 37px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffffff;
`;

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  //   width: 100vw;
  display: flex;
  flex-direction: column;
  //   align-items: center;
  padding: 39px 25px 60px 25px;
  background-color: #061021;
`;

export const H3 = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 146.99%;
  letter-spacing: 0.04em;
  color: #ffffff;
  padding-bottom: 25px;
`;

export const NaVlink = styled(NavLink)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.04em;
  color: #ffffff;
  :hover:not(.active) {
    color: #ea2230;
  }
  //   :hover {
  //     color: #ea2230;
  //   }
  &.active {
    color: #ea2230;
  }
`;
export const NaVlinkIcone = styled(NavLink)`
  fill: white;
  margin-right: 9px;
  :hover:not(.active) {
    fill: #ea2230;
  }
  &.active {
    fill: #ea2230;
  }
`;
export const UlSocial = styled.ul`
  display: flex;
  align-items: center;
`;
export const UlContacts = styled.ul`
  margin-bottom: 26px;
`;
export const Li = styled.li`
  margin-bottom: 11px;
`;
export const BoxAboutSocial = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  /* or 135% */

  letter-spacing: 0.04em;

  color: #ffffff;
`;

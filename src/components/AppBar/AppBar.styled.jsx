import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppBarBox = styled.div`
  min-width: 290px;
  width: auto;
  height: auto;
  min-height: 57px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #adadad;
  margin: 25px 15px 0 15px;
  @media only screen and (min-width: 480px) {
    margin: 45px 75px 0 75px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  // :active{
  //     color:#EA2230
  // } ;
`;

export const Li = styled.li`
//   :active, :hover, :focus {
//     color: #ea2230;
  }
`;

export const NaVlink = styled(NavLink)`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 18px 0 18px 0;
  margin-left: 27px;
  position: relative;
  :hover:not(.active) {
    color: #ea2230;
  }
  &.active::after {
    box-sizing: inherit;
    content: ' ';
    display: flex;
    transition: background-color 250ms linear;
    position: absolute;
    left: 0;
    bottom: 15px;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: #ea2230;
    pading-left: 27px;
  }
`;
export const Nav = styled.nav`
  padding-left: 266px;
`;

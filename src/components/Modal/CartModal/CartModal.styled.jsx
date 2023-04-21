import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkButton = styled(NavLink)`
  box-sizing: border-box;
  width: 271px;
  margin-top:37px;
  padding-top: 22px;
  padding-bottom: 22px;
  background: ;
  border: 2px solid #ea2230;
  border-radius: 13px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 124.32%;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  color: black;
  :hover {
    background: #ea2230;
    color: #ffffff;
  }
  :active {
    color: #ffffff;
    background: #ea2230;
    border: 2px solid #c61e2a;
    border-radius: 13px;
  }
`;

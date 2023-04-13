import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
display: flex;
align-items: center;
justify-content: space-between;
width: 127px;

`

export const Li = styled.li`

`
export const NaVlink = styled(NavLink)`
stroke: black;
fill: black;
:hover {
  stroke: red;
}
&.active {
  fill: red;
  stroke: red;
}
`;
import styled from '@emotion/styled';
import { ReactComponent as Cart } from '../../img/Group.svg';
import { ReactComponent as Burger } from '../../img/Burger.svg';
import { ReactComponent as UserU } from '../../img/UserU.svg';
import { ReactComponent as Heart } from '../../img/Vector.svg';

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 127px;
`;

// export const Li = styled.li`
// :hover:not(.active)`;

export const HeartIcone = styled(Heart)`
  stroke: black;
  :hover {
    stroke: #ea2230;
  }
  &.active {
    stroke: #ea2230;
  }
`;
export const CartIcone = styled(Cart)`
  stroke: black;

  :hover {
    stroke: #ea2230;
  }
  &.active {
    stroke: #ea2230;
  }
`;

export const BurgerIcone = styled(Burger)`
  stroke: black;
  :hover {
    stroke: #ea2230;
  }
  &.active {
    stroke: #ea2230;
  }
`;

export const UserUIcone = styled(UserU)`
  fill: black;
  :hover {
    fill: #ea2230;
  }
  &.active {
    fill: #ea2230;
  }
`;
//  .active{

//  }
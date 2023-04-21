// import { NavLink } from 'react-router-dom';
import IconButton from 'components/button';
import { Text } from '../Main/Main.styled';

import {
  CartIcone,
  HeartIcone,
} from 'components/ButtonBarHeader/ButtonBarHeader.styled';
import { Div, Section } from './Recomended.styled';

const Recomended = ({ title, description, price, url, alt }) => {
  return (
    <Section>
      <Text>Recomended</Text>
      <ul>
        <li>
          <h2>{title}title</h2>
        </li>
        <li>
          <img src={url} alt={alt} />
          img
        </li>
        <li>
          <p>{description}description</p>
        </li>
        <li>
          <p>{price}price</p>
        </li>
      </ul>
      <Div>
        <IconButton>
          <HeartIcone />
        </IconButton>
        <IconButton>
          <CartIcone />
        </IconButton>
      </Div>
    </Section>
  );
};
export default Recomended;

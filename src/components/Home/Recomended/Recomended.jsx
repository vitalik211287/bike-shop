// import { NavLink } from 'react-router-dom';
import IconButton from 'components/button';
import { Section, Text } from '../Main/Main.styled';
import collection from '../../../../src/velo.json';
import {
  CartIcone,
  HeartIcone,
} from 'components/ButtonBarHeader/ButtonBarHeader.styled';
import { Box, P } from './Recomended.styled';
import {
  ColorSpane,
  Div,
  DivBox,
  DivColorLink,
  NaVlink,
} from 'components/Bike/Bike.styled';

const Recomended = () => {
  const { model, price, color, brend, img, description } = collection[6];
  return (
    <>
      <Section>
        <Text>Recomended</Text>
        <Box>
          <img src={img} alt={model}/>
          <DivColorLink>
            <ColorSpane style={{ background: `${color}` }} />
            <NaVlink to={`${model}`}>
              {brend} {model}
            </NaVlink>
          </DivColorLink>
          <P style={{ fontSize: '15px' }}>{description}</P>
          <Div>
            <P style={{ fontSize: '35px', textTransform: 'uppercase' }}>
              {price}$
            </P>
            <DivBox>
              <IconButton>
                <HeartIcone style={{ width: '27px' }}/>
              </IconButton>
              <IconButton>
                <CartIcone />
              </IconButton>
            </DivBox>
          </Div>
        </Box>
      </Section>
    </>
  );
};
export default Recomended;

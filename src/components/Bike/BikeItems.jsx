import {
  ColorSpane,
  Div,
  DivBox,
  DivColorLink,
  Li,
  NaVlink,
  TextPrice,
} from './Bike.styled';
import {
  CartIcone,
  HeartIcone,
} from 'components/ButtonBarHeader/ButtonBarHeader.styled';
import IconButton from 'components/button';

const BikeItems = ({ bike }) => {
  const { model, price, color, brend, img } = bike;
  return (
    <Li key={Date.now()}>
      <img src={img} alt={model} style={{ width: '232px' }} />
      <DivColorLink>
        <ColorSpane style={{ background: `${color}` }} />
        <NaVlink to={`${model}`}>
          {brend} {model}
        </NaVlink>
      </DivColorLink>
      <Div>
        <TextPrice>{price}</TextPrice>
        <DivBox>
          <IconButton>
            <HeartIcone />
          </IconButton>
          <IconButton>
            <CartIcone />
          </IconButton>
        </DivBox>
      </Div>
    </Li>
  );
  //   <li>{childrem}</li>;
};
export default BikeItems;

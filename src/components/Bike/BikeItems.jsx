import { Link } from 'react-router-dom';
import { Li } from './Bike.styled';
import { CartIcone, HeartIcone } from 'components/ButtonBarHeader/ButtonBarHeader.styled';
import { Div } from 'components/Home/Recomended/Recomended.styled';
import IconButton from 'components/button';

const BikeItems = ({ bike }) => {
  const {model, price, color,brend,img}=bike
  return (
    <Li key={Date.now()}>
      <Link to={`${model}`}>{model}</Link>
      <img src={img} alt={model} style={{width:'232px'}}/>
      <p>{brend}</p><p>{model}</p>
      <p>{price}</p>
      <p>{color}</p>
      <Div>
        <IconButton>
          <HeartIcone />
        </IconButton>
        <IconButton>
          <CartIcone />
        </IconButton>
      </Div>
    </Li>
  );
  //   <li>{childrem}</li>;
};
export default BikeItems;

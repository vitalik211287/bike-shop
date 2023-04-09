import { Link } from 'react-router-dom';
import { Li } from './Bike.styled';

const BikeItems = ({bike}) => {
    console.log(bike);
  return (
    <Li key={bike.toString()}>
      <Link to={`${bike}`}>{bike}</Link>
    </Li>
  );
  //   <li>{childrem}</li>;
};
export default BikeItems;

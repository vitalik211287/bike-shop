import { Link } from 'react-router-dom';

const BikeItems = ({bike}) => {
    console.log(bike);
  return (
    <li>
      <Link to={`${bike}`}>{bike}</Link>
    </li>
  );
  //   <li>{childrem}</li>;
};
export default BikeItems;

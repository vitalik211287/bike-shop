import BikeDeteils from 'components/Bike/BikeDeteils';
import { useParams } from 'react-router-dom';

const Bike = () => {
  const params = useParams();
  console.log(params);
  return <BikeDeteils/>;
};

export default Bike;

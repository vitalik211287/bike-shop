import BikeDeteils from 'components/Bike/BikeDeteils';
// import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Bike = () => {
  const {id} = useParams();
  console.log(id);
  // useEffect(()=>{

  // }, [])
  return <BikeDeteils bike={id}/>;
};

export default Bike;

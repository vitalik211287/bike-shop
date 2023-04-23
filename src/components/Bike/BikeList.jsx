import BikeItems from 'components/Bike/BikeItems';
import { Section, Ul } from './Bike.styled';
import collection from '../../../src/velo.json'

const BikeList = () => {
  return (
    <Section>
      <Ul>
        {collection.map(bike => {
          console.log(bike);
          return <BikeItems collection={collection}  bike={bike} />;
        })}
      </Ul>
    </Section>
  );
};
export default BikeList;

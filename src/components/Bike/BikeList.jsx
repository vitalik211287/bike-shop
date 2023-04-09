import BikeItems from 'components/Bike/BikeItems';
import { Section, Ul } from './Bike.styled';

const BikeList = () => {
  return (
    <Section>
      <Ul>
        {[
          'bike-1',
          'bike-2',
          'bike-3',
          'bike-4',
          'bike-5',
          'bike-6',
          'bike-7',
          'bike-8',
          'bike-9',
        ].map(bike => {
          return <BikeItems key={bike.toString()} bike={bike} />;
        })}
      </Ul>
    </Section>
  );
};
export default BikeList;

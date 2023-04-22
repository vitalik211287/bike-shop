import { Route, Routes } from 'react-router';
import Layout from './components/Layout/Layout';
import { AppBox } from './App.styled';
import {
  Contacts,
  Payment,
  Delivery,
  About,
  History,
  Catalog,
  AddToOrder,
  Favorite,
  Bike,
  Electric,
  Active,
  Kids,
  Road,
  Mountain,
  Home,
} from './pages';

export const App = () => {
  return (
    <AppBox>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mountain" element={<Mountain />} />
          <Route path="mountain/:id" element={<Bike />} />
          <Route path="road" element={<Road />} />
          <Route path="kids" element={<Kids />} />
          <Route path="active" element={<Active />} />
          <Route path="electric" element={<Electric />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="addtoorder" element={<AddToOrder />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="history" element={<History />} />
          <Route path="about" element={<About />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="payment" element={<Payment />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </AppBox>
  );
};

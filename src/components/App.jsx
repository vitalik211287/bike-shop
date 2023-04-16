import { Route, Routes } from 'react-router';
// import About from './About/About';
import Layout from './Layout/Layout';
import Homepage from 'pages/Home';
import Mountain from 'pages/Mountain';
import Road from 'pages/Road';
import Kids from 'pages/Kids';
import Active from 'pages/Active';
import Electric from 'pages/Electric';
import Bike from 'pages/Bike';
import { AppBox } from './App.styled';
import Favorite from 'pages/Favorite';
import AddToOrder from 'pages/AddToOrder';
import Catalog from 'pages/Catalog';

export const App = () => {
  return (
    <AppBox>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<AppBar />} /> */}
          <Route index element={<Homepage />} />
          <Route path="mountain" element={<Mountain />} />
          <Route path="mountain/:id" element={<Bike />} />
          <Route path="road" element={<Road />} />
          <Route path="kids" element={<Kids />} />
          <Route path="active" element={<Active />} />
          <Route path="electric" element={<Electric />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="addtoorder" element={<AddToOrder />} />
          <Route path="catalog" element={<Catalog />} />

          {/* <Route path="/" element={<Homepage />} /> */}
        </Route>
      </Routes>
    </AppBox>
  );
};

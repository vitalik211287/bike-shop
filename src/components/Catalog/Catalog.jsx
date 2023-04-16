import { Li, Ul } from "components/Bike/Bike.styled";
import { NaVlink, Nav } from "components/Nav/Navigation.styled";

const Catalog = () => {
    return (
        <Nav>
        <Ul>
          <Li>
            <NaVlink to="/mountain">Mountain</NaVlink>
          </Li>
          <Li>
            <NaVlink to="/road">Road</NaVlink>
          </Li>
          <Li>
            <NaVlink to="/active">Active</NaVlink>
          </Li>
          <Li>
            <NaVlink to="/kids">Kids</NaVlink>
          </Li>
          <Li>
            <NaVlink to="/electric">Electric</NaVlink>
          </Li>
        </Ul>
        </Nav> 
    );
  };
  export default Catalog;

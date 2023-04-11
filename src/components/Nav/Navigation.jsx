import { Li, NaVlink, Nav, Ul } from "./Navigation.styled"

const Navigation = ()=>{
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
    )
}
export default Navigation
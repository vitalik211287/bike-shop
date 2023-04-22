import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from '../../img/logo-specialized 2.svg';
import { ReactComponent as Instagram } from '../../img/Instagram.svg';
import { ReactComponent as Facebook } from '../../img/cib_facebook-f.svg';
import { ReactComponent as Youtube } from '../../img/akar-icons_youtube-fill.svg';
import { ReactComponent as Twitter } from '../../img/twitter-logo-2429.svg';
import {
    Box,
  BoxAboutSocial,
  H3,
  Li,
  NaVlink,
  NaVlinkIcone,
  Section,
  UlContacts,
  UlSocial,
} from './Footer.styled';
import Logo from './logo-specialized 2.png'

const Footer = () => {
  return (
    <Section>
      <Link to="/">
<img src={Logo} alt="Logo" />
      </Link>
      <BoxAboutSocial>
        <ul>
          <Li>
            <NaVlink to="/about">About us</NaVlink>
          </Li>
          <Li>
            <NaVlink to="/delivery">Delivery</NaVlink>
          </Li>
          <Li>
            <NaVlink to="/payment">Payment</NaVlink>
          </Li>
          <Li>
            <NaVlink to="/contacts">Contacts</NaVlink>
          </Li>
        </ul>
        <div>
          <H3>CONTACTS</H3>
          <UlContacts>
            <li>
              <NaVlink to="tel:877-808-8154" style={{fontWeight: '700'}}>877-808-8154</NaVlink>
            </li>
            <li>
              <NaVlink to="mailto:vitalik211287@mail.com">
                info@sitename.ua
              </NaVlink>
            </li>
          </UlContacts>
          <UlSocial>
            <li>
              <NaVlinkIcone to="https://twitter.com/" target="_blank">
                <Twitter />
              </NaVlinkIcone>
            </li>
            <li>
              <NaVlinkIcone to="https://www.youtube.com/" target="_blank">
                <Youtube />
              </NaVlinkIcone>
            </li>
            <li>
              <NaVlinkIcone to="https://www.facebook.com/" target="_blank">
                <Facebook />
              </NaVlinkIcone>
            </li>
            <li>
              <NaVlinkIcone to="https://www.instagram.com/" target="_blank">
                <Instagram />
              </NaVlinkIcone>
            </li>
          </UlSocial>
        </div>
      </BoxAboutSocial>
      <div style={{ color: 'white' }}>
        <Box>
          <span>© 2034</span>
          <span>sitename.ua</span>
          <span style={{paddingBottom: '22px'}}>All rights reserved</span>
          <span>Public offer</span>
        </Box>
      </div>
    </Section>
  );
};
export default Footer;

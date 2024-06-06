import React, { useState } from "react";

/* LIBS */

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

/* STYLE */
import {
  Ancor,
  Header,
  HeaderContainer,
  HeaderContainerDiv,
  HeaderMiddleContainer,
  HeaderMiddleContainerDiv,
  Logo,
  Icons,
  Nav,
  Ul,
  Li,
  NavMenuContainer,
} from "./style";

import './style.css'

/* Components */

import Span from "../../Components/Span/index";

/* IMAGES */
import LogoPaqueta from "../../Assets/Logos/PaquetaLogo.png";
import HeadPhoneIcon from "../../Assets/Icons/HeadPhoneIcon.png";
import LocationIcon from "../../Assets/Icons/LocationIcon.png";
import HeartIcon from "../../Assets/Icons/HeartIcon.png";
import BagIcon from "../../Assets/Icons/BagIcon.png";
import UserIcon from "../../Assets/Icons/UserIcon.png";
import { HiOutlineBars3 } from "react-icons/hi2";

const HeaderComponent = () => {
  const [openNav, setOpenNav] = useState(false);

  const navOptions = [
    "Novidades",
    "Feminino",
    "Masculino",
    "Paquetá Esportes",
    "Outlet",
    "CashBack",
  ];

  return (
    <>
      <Header>
        <HeaderContainer>
          <Span isLink={true}>Loja de Calçados e Moda Online</Span>
          <HeaderContainerDiv>
            <Ancor href="#">
              <Icons src={HeadPhoneIcon} alt="HeadPhone Icon" />
              <Span isLink={true}>Fale Conosco</Span>
            </Ancor>
            <Ancor href="#">
              <Icons src={LocationIcon} alt="IconHeaderContainer" />
              <Span isLink={true}>Encontrar uma loja física</Span>
            </Ancor>
          </HeaderContainerDiv>
        </HeaderContainer>

        <HeaderMiddleContainer>
          <Ancor href="#">
            <Logo src={LogoPaqueta} />
          </Ancor>
          <HeaderMiddleContainerDiv>
            <Ancor href="#">
              <Icons src={HeartIcon} alt="HeartIcon Icon" />
              <Span isBlack={true}>Favoritos</Span>
            </Ancor>
            <Ancor href="#">
              <Icons src={BagIcon} alt="BagIcon" />
              <Span isBlack={true}>Sacola</Span>
            </Ancor>
            <Ancor href="#">
              <Icons src={UserIcon} alt="UserIcon" />
              <Span isBlack={true}>Entrar</Span>
            </Ancor>
          </HeaderMiddleContainerDiv>
        </HeaderMiddleContainer>

        <Nav>
          <Ul>
            <Li>
              <Ancor src="#">
                <Span isNav={true}> Novidades </Span>
              </Ancor>
            </Li>
            <Li>
              <Ancor src="#">
                <Span isNav={true}> Feminino </Span>
              </Ancor>
            </Li>
            <Li>
              <Ancor src="#">
                <Span isNav={true}> Masculino </Span>
              </Ancor>
            </Li>
            <Li>
              <Ancor src="#">
                <Span isNav={true}> Paqueta Esportes </Span>
              </Ancor>
            </Li>
            <Li>
              <Ancor src="#">
                <Span isNav={true}> Outlet </Span>
              </Ancor>
            </Li>
            <Li>
              <Ancor src="#">
                <Span isNav={true}> Cashback </Span>
              </Ancor>
            </Li>
          </Ul>
          <NavMenuContainer>
            <HiOutlineBars3 onClick={() => setOpenNav(true)} />
          </NavMenuContainer>
          <Drawer
            open={openNav}
            onClose={() => setOpenNav(false)}
            anchor="right"
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setOpenNav(false)}
              onKeyDown={() => setOpenNav(false)}
            >
              <List>
                {navOptions.map((item) => (
                  <ListItem key={item} disablePadding>
                    <a href="#" className="menuMobileLink">
                      <ListItemButton>
                        <ListItemText primary={item} className="menuMobile" />
                      </ListItemButton>
                    </a>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </Nav>

        {/*  <div>
            <HiOutlineBars3 onClick={() => setOpenNav(true)} />
          </div>
          <Drawer
            open={openNav}
            onClose={() => setOpenNav(false)}
            anchor="right"
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setOpenNav(false)}
              onKeyDown={() => setOpenNav(false)}
            >
              <List>
                {navOptions.map((item) => (
                  <ListItem key={item} disablePadding>
                    <a href="#" className="navbar-menu-link">
                      <ListItemButton>
                        <ListItemText primary={item} />
                      </ListItemButton>
                    </a>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer> */}
      </Header>
    </>
  );
};

export default HeaderComponent;

import styled from "styled-components";

export const Header = styled.header`
  background-color: #ffffff;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  background: linear-gradient(#ff8a29 100%, #cf5d00 100%);
  display: flex;
  height: 53px;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 700px) {
    height: 30px;
  }
`;

export const HeaderMiddleContainer = styled(HeaderContainer)`
  background: #ffff;
  padding: 60px;
  flex-wrap: wrap;
  align-content: center;

  @media (max-width: 700px) {
    justify-content: center;
  }
`;

export const HeaderContainerDiv = styled.div`
  display: flex;
  gap: 59px;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const HeaderMiddleContainerDiv = styled.div`
  display: flex;
  gap: 59px;
  align-items: center;
`;

export const Ancor = styled.a`
  display: flex;
  gap: 12px;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Nav = styled.nav``;

export const Icons = styled.img``;

export const Ul = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: space-around;
  padding: 0 60px;
  list-style: none;

  @media (max-width: 975px) {
    display: none;
  }
`;

export const Li = styled.li``;

export const NavMenuContainer = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 975px) {
    display: block;
    text-align: center;
    margin: 10px;
    font-size: 40px;
  }
`;

/*     
    background: linear-gradient(#ff8a29 100%, #cf5d00 100%); */

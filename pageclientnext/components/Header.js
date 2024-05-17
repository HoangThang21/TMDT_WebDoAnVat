import Link from "next/link";
import { styled } from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/Bars";
import SearchIcon from "./icons/SearchIcon";
import ShopIcon from "./icons/ShopIcon";
import UserIcon from "./icons/UserIcon";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";
import "@/i18n/i18n.js";
const StyledHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyleNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
        display: block;
    `
      : `
        display: none;
    `}

  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  min-width: 30px;
  padding: 10px 0;
  svg {
    height: 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const NavDropDown = styled.button`
  background-color: transparent;
  border: 0;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 4;
  p {
    margin: 0;
  }
  /* @media screen and (min-width: 768px) {
    display: none;
  } */
`;
const NavDiv = styled.div`
  background-color: #fff;
  border: 0;
  color: #000;
  cursor: pointer;
  position: absolute;
  top: 50px;
  right: 200px;
  padding: 0 10px;
  border-radius: 10px;
  z-index: 4;
  p{
    padding: 10px;
    border-radius: 5px;
  }
  p:hover{
    background-color: #ccc;
  }
`;
const SideIcons = styled.div`
  display: flex;
  align-items: center;
  a {
    display: inline-block;
    min-width: 20px;
    color: white;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
const ShopNavIcon = styled.div`
  position: relative;
`;
const ShopNavNumber = styled.div`
  position: absolute;
  top: 0;
  right: -10px;
  width: 20px;
  height: 20px;
  font-size: 18px;
`;

export default function Header({ t }) {
  const { cartProducts } = useContext(CartContext);
  const { data: session } = useSession();
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [navActiveDrop, setNavActiveDrop] = useState(false);
  const { i18n } = useTranslation();
  function handleLang(ln) {
    i18n.changeLanguage(ln);
    setNavActiveDrop(false);
  }
  function handleDrop(){
    setMobileNavActive((prev) => !prev);
    setNavActiveDrop((prev) => !prev);
    
  }
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>TechFood</Logo>
          <StyleNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>{t("Home")}</NavLink>
            <NavLink href={"/products"}>{t("Product")}</NavLink>
            <NavLink href={"/categories"}>{t("Category")}</NavLink>
            <NavLink href={"/cart"} title="Giỏ hàng">
              <ShopNavIcon>
                <ShopIcon></ShopIcon>
                <ShopNavNumber>({cartProducts.length})</ShopNavNumber>
              </ShopNavIcon>
            </NavLink>
          </StyleNav>
          <SideIcons>
            <Link href={"/search"}>
              <SearchIcon></SearchIcon>
            </Link>

            <NavLink href={"/account"}>
              <UserIcon></UserIcon> {session && session.user?.name}{" "}
              {!session && <>Well come</>}
            </NavLink>
            <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
              <BarsIcon></BarsIcon>
            </NavButton>

            <NavDropDown onClick={() => handleDrop()}>
              <p>{t("Select language") == "Select language" && "English"}</p>
              <p>{t("Select language") != "Select language" && "Tiếng việt"}</p>
            </NavDropDown>
            {navActiveDrop && (
              <NavDiv>
                <p onClick={() => handleLang("en")}>English</p>
                <p onClick={() => handleLang("vi")}>Tiếng việt</p>
              </NavDiv>
            )}
          </SideIcons>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

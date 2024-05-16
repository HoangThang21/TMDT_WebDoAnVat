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

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const { data: session } = useSession();
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>TechFood</Logo>
          <StyleNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/"}>Trang chủ</NavLink>
            <NavLink href={"/products"}>Sản phẩm</NavLink>
            <NavLink href={"/categories"}>Danh mục</NavLink>

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
              <UserIcon></UserIcon> {session && (session.user?.name)} {!session && (<>Hello</>)}
            </NavLink>
            <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
              <BarsIcon></BarsIcon>
            </NavButton>
          </SideIcons>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}

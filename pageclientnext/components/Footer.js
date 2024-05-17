import styled from "styled-components";
import Center from "./Center";
import Link from "next/link";

const StyledFooter = styled.header`
  margin-top: 40px;
  background-color: #222;
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
  width: 100%;
  padding: 70px 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  img {
    width: 200px !important;
    height: 64px !important;
    object-fit: fill;
  }

  p {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const NavDiv = styled.div`
  display: block;
  color: #aaa;
  text-decoration: none;
  min-width: 30px;
  padding: 10px 0;
  p {
    font-size: 12px;
  }
  div > img {
    width: 68px;
    height: 68px;
    object-fit: fill;
  }
  div {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  div > span {
    margin-left: 20px;

    color: #fff;
    font-weight: bold;
    font-size: 32px;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
export default function Footer({ t }) {
  return (
    <>
      <StyledFooter>
        <Center>
          <Wrapper>
            <StyleNav>
              <NavDiv>
                <div>
                  <img src="/iconlogoweb.png" alt="" /> <span>TECHFOOD</span>
                </div>
                <p>Copyright © 2024 TechFood</p>
                <p>
                  {t("Address")}: 1209/61, Bình Đức 1, Phường Bình Đức, TP.Long
                  Xuyên, Tỉnh An Giang
                </p>
                <p>{t("Legal representative")}: Nguyễn Hoàng Thắng</p>
                <p>
                  {t("Tax code")}: 1601223524, {t("Date of first issue")}:
                  17/05/2024, {t("Last issued")}: 17/05/2024
                </p>
                <p>
                  {t("Phone")}: 0364.411.871 - Email:
                  nthang_21th@student.agu.edu.vn
                </p>
                <p>Zalo: 0355.378.007 - ZaloPage: {t("Company")} TechFood</p>
              </NavDiv>
              <NavDiv>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d178.83998677060774!2d105.41841167660262!3d10.400890336532045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI0JzAzLjMiTiAxMDXCsDI1JzA2LjciRQ!5e1!3m2!1svi!2s!4v1715924779419!5m2!1svi!2s"
                    width="400"
                    height="300"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <NavLink href={"#"}>
                  {" "}
                  <div>
                    <img src="/dathongbao.png" alt="" />
                  </div>
                </NavLink>
                <NavLink href={"#"}>
                  {" "}
                  <p>Điều khoản dịch vụ</p>
                </NavLink>
                <NavLink href={"#"}>
                  {" "}
                  <p>Dịch vụ giảm chi phí vận chuyển</p>
                </NavLink>
                <NavLink href={"#"}>
                  {" "}
                  <p>Chính sách vận chuyển TechFood</p>
                </NavLink>
                <NavLink href={"#"}>
                  {" "}
                  <p>Chính sách bảo mật</p>
                </NavLink>
                <NavLink href={"#"}>
                  {" "}
                  <p>Chính sách hoàn trả</p>
                </NavLink>
              </NavDiv>
            </StyleNav>
          </Wrapper>
        </Center>
      </StyledFooter>
    </>
  );
}

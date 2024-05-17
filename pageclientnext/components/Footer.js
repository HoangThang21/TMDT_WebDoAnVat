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
    width: 200px;
    height: 64px;
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
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Center>
          <Wrapper>
            <StyleNav>
              <NavDiv>
                <p>Copyright © 2024 TechFood</p>
                <p>
                  Địa chỉ: 1209/61, Bình Đức 1, Phường Bình Đức, TP.Long Xuyên,
                  Tỉnh An Giang
                </p>
                <p>Người đại điện theo pháp luật: Nguyễn Hoàng Thắng</p>
                <p>
                  Mã số thuế: 1601223524, ngày cấp lần đầu: 17/05/2024, cấp lần
                  cuối: 17/05/2024
                </p>
                <p>
                  Điện thoại: 0364.411.871 - Email:
                  nthang_21th@student.agu.edu.vn
                </p>
                <p>Zalo: 0355.378.007 - ZaloPage: Công ty TechFood</p>
              </NavDiv>
              <NavDiv>
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

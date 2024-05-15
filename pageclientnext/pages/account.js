import Center from "@/components/Center";
import Header from "@/components/Header";

import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@/components/Button";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import Input from "@/components/Input";
import { RevealWrapper } from "next-reveal";
import axios from "axios";
import Spinner from "@/components/Spinner";

const ColsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 40px;
  margin: 40px 0;
`;
const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

export default function AccountPage() {
  const { data: session } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [loaded, setLoaded] = useState("");
  async function logout() {
    await signOut({
      callbackUrl: process.env.NEXT_PUBLIC_URL
    });
  }
  async function login() {
    await signIn("google");
  }
  function saveAddress() {
    const data = { name, email, city, streetAddress, postalCode, country };
    axios.put("/api/address", data);
  }
  useEffect(() => {
    axios.get("/api/address").then((response) => {
      setName(response.data.name);
      setEmail(response.data.email);
      setCity(response.data.city);
      setPostalCode(response.data.postalCode);
      setStreetAddress(response.data.streetAddress);
      setCountry(response.data.country);
      setLoaded(true);
    });
  }, []);
  return (
    <>
      <Header></Header>
      <Center>
        <ColsWrapper>
          <div>
            <RevealWrapper delay={0}>
              <WhiteBox>
                <h2>Danh sách yêu thích</h2>
              </WhiteBox>
            </RevealWrapper>
          </div>
          <div>
            <RevealWrapper delay={100}>
              <WhiteBox>
                <h2>Chi tiết tài khoản</h2>
                {!loaded && (
                  <>
                    <Spinner fullWidth={true}></Spinner>
                  </>
                )}
                {loaded && (
                  <>
                    <Input
                      type="text"
                      placeholder="Name"
                      value={name}
                      name="name"
                      onChange={(ev) => setName(ev.target.value)}
                    ></Input>
                    <Input
                      type="text"
                      placeholder="Email"
                      value={email}
                      name="email"
                      onChange={(ev) => setEmail(ev.target.value)}
                    ></Input>
                    <CityHolder>
                      <Input
                        type="text"
                        placeholder="City"
                        value={city}
                        name="city"
                        onChange={(ev) => setCity(ev.target.value)}
                      ></Input>
                      <Input
                        type="text"
                        placeholder="Post Code"
                        value={postalCode}
                        name="postalCode"
                        onChange={(ev) => setPostalCode(ev.target.value)}
                      ></Input>
                    </CityHolder>
                    <Input
                      type="text"
                      placeholder="Street Address"
                      value={streetAddress}
                      name="streetAddress"
                      onChange={(ev) => setStreetAddress(ev.target.value)}
                    ></Input>
                    <Input
                      type="text"
                      placeholder="Country"
                      value={country}
                      name="country"
                      onChange={(ev) => setCountry(ev.target.value)}
                    ></Input>

                    <Button black={1} block={1} onClick={saveAddress}>
                      Lưu
                    </Button>
                    <hr />
                  </>
                )}

              
                {session && (
                  <Button primary onClick={logout}>
                    {" "}
                    Thoát
                  </Button>
                )}
                {!session && (
                  <Button primary onClick={login}>
                    {" "}
                    Đăng nhập
                  </Button>
                )}
              </WhiteBox>
            </RevealWrapper>
          </div>
        </ColsWrapper>
      </Center>
    </>
  );
}

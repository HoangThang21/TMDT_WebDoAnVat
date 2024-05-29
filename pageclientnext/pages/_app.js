import { CartContextProvider } from "@/components/CartContext";
import { SessionProvider } from "next-auth/react";
import { createGlobalStyle } from "styled-components";

import Head from "next/head";
const GlobalStyles = createGlobalStyle`


  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

  body{
    background-color: #eee;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
  hr{
    display: block;
    border: 0;
    border-top:1px solid #ccc;
 
  }
`;

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Trang Chủ</title>
        <meta name="description" content="Trang chủ TECHFOOD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="TECHFOOD" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.imdb.com/title/tt0117500/"
        />
        <meta
          property="og:image"
          content="https://github.com/HoangThang21/TMDT_WebDoAnVat/blob/main/pageclientnext/public/logoweb.png?raw=true"
        />
        <meta
          property="og:description"
          content="Chào mừng bạn đến TEACHFOOD."
        />
      </Head>
      <main>
        <SessionProvider session={session}>
          <CartContextProvider>
            <Component {...pageProps} />
          </CartContextProvider>
        </SessionProvider>
      </main>
    </>
  );
}

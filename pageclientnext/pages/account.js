import Center from '@/components/Center'
import Header from '@/components/Header'
import Title from '@/components/Title'
import React from 'react'
import {signIn, signOut, useSession} from 'next-auth/react'
import Button from '@/components/Button'

export default function AccountPage() {
  const {data:session}= useSession();
  async function logout(){
    await signOut({
      callbackUrl: process.env.NEXT_PUBLIC_URL,
    });
  }
  async function login(){
    await signIn('google');
  }
  return (
    <>
       <Header></Header>
       <Center>
       <Title>Account</Title>
       {session &&(

    <Button primary onClick={logout}> Thoát</Button>
       )}
       {!session &&(
        <Button primary onClick={login}> Đăng nhập</Button>
       )

       }
       </Center>

    </>
  )
}

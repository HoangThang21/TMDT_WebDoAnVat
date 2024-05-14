import Center from '@/components/Center'
import Header from '@/components/Header'
import Title from '@/components/Title'
import React from 'react'
import {signOut, useSession} from 'next-auth/react'
import Button from '@/components/Button'

export default function AccountPage() {
  const session= useSession();
  console.log(session);
  return (
    <>
       <Header></Header>
       <Center>
       <Title>Account</Title>
       {session &&(

    <Button primary onClick={()=> signOut()}> Logout</Button>
       )}
       </Center>

    </>
  )
}

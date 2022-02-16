import { getSession, signIn, signOut, useSession } from 'next-auth/client';
import Head from 'next/head'
import MainComponent from '../components/MainComponent';
import NHeader from '../components/Nheader';
import NHeader2 from '../components/Nheader2';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const Login = () => {

  const [ session, loading ] = useSession();
  const router = useRouter();

  if(session) {
    router.push('/dashboard');
  }
  return (
    <MainComponent />
  )
}


export default Login;
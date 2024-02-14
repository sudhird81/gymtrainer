import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import { useSession } from "next-auth/react"
import MainLayout from '../components/MainLayout'

export default function Home({ data, locale }) {
  const { t } = useTranslation();
  console.log("t", t);


  return (
    <>

      <MainLayout />


    </>

  );
}

export const getServerSideProps = async (context) => {
  const { locale } = context;
  console.log("locale", locale)
  // const res = await fetch('http://localhost:3001/' + locale);
  // const data = await res.json();
  const data = [];

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      data,
      locale,
    },
  };
};

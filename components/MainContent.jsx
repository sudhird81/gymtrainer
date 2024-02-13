import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';
import { useSession } from "next-auth/react"
import MainLayout from '../components/MainLayout'


export default function MainContent() {
    const { t } = useTranslation();
    console.log("t", t);

    return (
        <>

            <div>
                <Head>
                    <title>{t('app_title')}</title>
                </Head>
                <div className='grid grid-rows-4 p-4 md:grid-rows-2 md:p-0 grid-flow-col gap-4 min-h-screen'>
                    <p>{t('main_title')}</p>

                    {/* {data.map((news, id) => (
            <div
              key={id}
              className='mt-6 p-6 border-2 border-red-100 hover:border-red-200 shadow-lg hover:shadow-md rounded-md flex flex-col gap-4'
            >
              <p className='font-mono bg-red-100 px-2 w-fit rounded-md'>
                {news.date}
              </p>
              <Link
                href={{
                  pathname: '/news/[slug]',
                  query: { slug: news.slug },
                }}
                locale={locale}
              >
                <h3 className='text-2xl font-bold text-red-900 hover:underline cursor-pointer'>
                  {news.title}
                </h3>
              </Link>

              <p className='italic'>{news.description}</p>
              <Link
                href={{
                  pathname: '/news/[slug]',
                  query: { slug: news.slug },
                }}
                locale={locale}
                className='p-2 mt-4 w-fit bg-red-800 hover:bg-red-900 text-white
              rounded-md font-semibold uppercase'
              >
                {t('button_label')}
              </Link>
            </div>
          ))} */}
                </div>
            </div>
        </>
    )
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
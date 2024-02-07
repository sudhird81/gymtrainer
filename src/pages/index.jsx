import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Header from '../components/Header';

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex flex-col items-center justify-center">
        <div className="text-white text-center space-y-4">
          <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
          <h2 className="text-2xl">Next.js 13 SSR + i18n + Tailwind CSS</h2>
          <p className="text-lg">Web3 Futuristic Style</p>
          
        </div>
      </div>
    </>
  );
}
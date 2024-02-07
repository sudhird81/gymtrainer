import Header from '@/components/Header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LanguageSwitcher from '../components/LanguageSwitcher';

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['about', 'common'])),
        },
    };
}

export default function About() {
    const { t } = useTranslation('about');

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex flex-col items-center justify-center">
                <div className="text-white text-center space-y-4">
                    <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
                    <p className="text-lg">{t('created_by')}</p>
                    
                </div>
            </div>
        </>
    );
}
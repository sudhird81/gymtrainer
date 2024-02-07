import Header from '@/components/Header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { Button, Checkbox, Form, Input } from 'antd';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

export async function getServerSideProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['about', 'common'])),
        },
    };
}

const Dashboard = () => {
    const { t } = useTranslation('about');
    const router = useRouter();



    const logout = () => {
        
        Cookies.remove('loggedin');
        router.push('/sign-in')
    }
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 flex flex-col items-center justify-center">
                <div className="text-white text-center space-y-4">
                    <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
                    <p className="text-lg">to the Dashboard</p>
                    {/* <Button type="primary" onClick={logout}>
                        Logout
                    </Button> */}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
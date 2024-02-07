// components/LanguageSwitcher.js
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
    const router = useRouter();
    const { t, i18n } = useTranslation();

    const changeLanguage = async (lang) => {
        await i18n.changeLanguage(lang);
        const currentPath = router.asPath;
        const newPath = currentPath.startsWith(`/${router.locale}`)
            ? currentPath.replace(`/${router.locale}`, `/${lang}`)
            : `/${lang}${currentPath}`;
        router.push(newPath, newPath, { locale: false });
    };

    return (
        <div className="flex space-x-2">
            <button
                onClick={() => changeLanguage('en')}
                className={`text-lg ${i18n.language === 'en' ? 'font-bold' : ''}`}
            >
                EN
            </button>
            <span>/</span>
            <button
                onClick={() => changeLanguage('es')}
                className={`text-lg ${i18n.language === 'es' ? 'font-bold' : ''}`}
            >
                ES
            </button>
        </div>
    );
};

export default LanguageSwitcher;

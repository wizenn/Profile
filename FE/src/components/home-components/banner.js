import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../public-components/themeprovider';
import { FaFacebookF, FaGithub, FaInstagram, FaTiktok, FaAdjust } from 'react-icons/fa';

const Banner = () => {
    const { toggleTheme } = useTheme();
    const { t, i18n } = useTranslation('banner');

    const [roles, setRoles] = useState([]);
    const [typewriterKey, setTypewriterKey] = useState(0);

    useEffect(() => {
        // Cập nhật thủ công khi ngôn ngữ thay đổi
        i18n.reloadResources(i18n.language, 'banner').then(() => {
            const translatedRoles = i18n.t('roles', { returnObjects: true, lng: i18n.language });
            console.log("typeof translatedRoles", typeof translatedRoles);
            console.log("translatedRoles", translatedRoles);
            setRoles(translatedRoles);
            setTypewriterKey(prev => prev + 1);
        });
    }, [i18n.language]);





    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).catch(console.error);
    };
    console.log('Language:', i18n.language);
    console.log('Roles in state:', roles);
    console.log('Component re-rendered!');


    return (
        <div className="relative h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
            <div className="absolute left-2 top-1/2 -translate-y-1/2 text-current text-base tracking-widest" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                <div className='flex ml-20 gap-5'>
                    <button onClick={() => changeLanguage('vi')}>{t('language_vi')}</button>
                    <button onClick={() => changeLanguage('en')}>{t('language_en')}</button>
                </div>
            </div>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold">Minh Quis</h1>
                <p className="text-lg md:text-2xl mt-4">
                    {t("intro")}{' '}
                    {Array.isArray(roles) && roles.length > 0 && (
                        <Typewriter
                            key={i18n.language}

                            words={roles}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    )}

                    {' '}{t("followup")}
                </p>

            </div>

            <img src={require('../../assets/mquis.png')} alt="banner" className="absolute right-12 bottom-0 h-full object-cover object-right z-0 opacity-90" />

            <div className="absolute right-5 bottom-20 flex flex-col gap-6 text-xl z-50">
                <button onClick={toggleTheme} className="hover:text-pink-500"><FaAdjust /></button>
                <a href="https://www.facebook.com/mquis.03" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaFacebookF /></a>
                <a href="https://github.com/wizenn" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaGithub /></a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaTiktok /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            </div>
        </div>
    );
};

export default Banner;

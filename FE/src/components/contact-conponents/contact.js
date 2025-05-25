import React, { useState } from 'react'
import { FaArrowLeft, FaUser, FaRegMap } from 'react-icons/fa'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation('contact');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        title: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, title, message } = formData;
        if (!name || !email || !title || !message) {
            setStatus(t('status_missing_fields'));
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus(t('status_invalid_email'));
            return;
        }
        setStatus(t('status_sending'));
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        ).then(
            (result) => {
                console.log('SUCCESS!', result.text);
                setStatus(t('status_success'));
                setFormData({ name: '', email: '', title: '', message: '' });
            },
            (error) => {
                console.error('FAILED...', error);
                setStatus(t('status_failed'));
            }
        );
    };

    return (
        <div className='relative w-full min-h-screen bg-white dark:bg-black text-black dark:text-white'>
            <div className="text-white p-4 md:p-6">
                <div className="fixed top-4 right-4 z-50 rounded-full p-2 hover:bg-gray-800 transition">
                    <a href="/" className="flex items-center space-x-2">
                        <FaArrowLeft className="w-5 h-5 text-white" />
                        <span className="hidden md:inline text-sm text-slate-900 dark:text-white font-medium">{t('back')}</span>
                    </a>
                </div>
                <div className="text-center mb-8 md:mb-10">
                    <p className="text-slate-900 dark:text-white font-bold text-sm md:text-base">{t('header_subtitle')}</p>
                    <h1 className="text-3xl md:text-5xl text-slate-900 dark:text-white font-bold mt-2 md:mt-4">{t('header_title')}</h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-start gap-8 md:gap-10 max-w-6xl mx-auto">
                    <div className='flex-1 w-full px-2 md:px-4'>
                        <h2 className='text-xl md:text-2xl font-semibold mb-4 text-slate-900 dark:text-white'>{t('form_title')}</h2>
                        <form className='flex flex-col gap-4 text-gray-300' onSubmit={handleSubmit}>
                            <div className='flex flex-col md:flex-row gap-4'>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className='flex-1 bg-zinc-100 dark:bg-stone-900 rounded p-3 text-sm'
                                    placeholder={t('placeholder_name')}
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className='flex-1 bg-zinc-100 dark:bg-stone-900 rounded p-3 text-sm'
                                    placeholder={t('placeholder_email')}
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className='bg-zinc-100 dark:bg-stone-900 rounded p-3 text-sm w-full'
                                placeholder={t('placeholder_title')}
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className='bg-zinc-100 dark:bg-stone-900 rounded p-3 text-sm w-full h-40 resize-none'
                                placeholder={t('placeholder_message')}
                                required
                            />
                            <button type="submit" className='bg-green-700 hover:bg-green-800 text-white rounded-3xl px-6 py-3 w-fit'>{t('button_send')}</button>
                            {status && (
                                <p className={`text-sm ${status === t('status_failed') || status === t('status_invalid_email') || status === t('status_missing_fields') ? 'text-red-400' : 'text-green-400'}`}>
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                    <div className='flex-1 w-full px-2 md:px-4'>
                        <h2 className='text-xl md:text-2xl text-slate-900 dark:text-white font-semibold mb-4'>{t('info_title')}</h2>
                        <p className='mb-6 text-sm md:text-base text-slate-900 dark:text-white'>{t('info_text')}</p>
                        <div className="flex gap-6">
                            <div className="flex flex-col items-center gap-10 mt-3 text-green-500">
                                <FaUser size={18} />
                                <FaRegMap size={18} />
                                <IoCallOutline size={18} />
                                <MdOutlineMail size={18} />
                            </div>
                            <div className="w-[1px] bg-gray-500" />
                            <div className="flex flex-col gap-4 text-sm">
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">{t('label_name')}</h3>
                                    <p className='text-slate-900 dark:text-white'>{t('value_name')}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">{t('label_location')}</h3>
                                    <p className='text-slate-900 dark:text-white'>{t('value_location')}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">{t('label_phone')}</h3>
                                    <p className='text-slate-900 dark:text-white'>{t('value_phone')}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900 dark:text-white">{t('label_email')}</h3>
                                    <p><a href={`mailto:${t('value_email')}`} className="text-slate-900 dark:text-white">{t('value_email')}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import traslations from '@/dictionaries/data.json';

type Dictionary = (typeof traslations)[keyof typeof traslations];

type LanguageContextType = {
    locale: keyof typeof traslations;
    toggleLanguage: () => void;
    dictionary: Dictionary;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
    return ctx;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState<keyof typeof traslations>('es');
    
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage === 'es' || savedLanguage === 'en') setLocale(savedLanguage);
    }, []);

    const toggleLanguage = () => {
        const newLocale = locale === 'es' ? 'en' : 'es';
        setLocale(newLocale);
        localStorage.setItem('language', newLocale);
    }

    const dictionary = traslations[locale as keyof typeof traslations];

    return (
        <LanguageContext.Provider value={{ locale, toggleLanguage, dictionary }}>
            {children}
        </LanguageContext.Provider>
    );
}
import { useState } from "react";
import type { Language } from "./FooterCard";

interface LanguageSelectorProps {
    value: Language;
    onChange: (lang: Language) => void;
}

export default function LanguageSelector(props: LanguageSelectorProps) {
    const { value, onChange } = props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
    const handleSelect = (lang: Language) => {
        onChange(lang);
        setIsOpen(false);
    };

    return (
        <div className='relative inline-block'>
            <button onClick={toggleOpen} className='flex items-center gap-1 font-abc-diatype text-2xs font-bold'>
                <span role='img' className='text-2xs text-ceramics'>🌐</span>
                <span className='text-2xs text-ceramics font-bold'>{value.toUpperCase()}</span>
                <span className='text-2xs text-ceramics font-bold'>▾</span>
            </button>

            {isOpen && (
                <div className='absolute mt-2 left-0 z-10 bg-primary border rounded-md min-w-24'>
                    <button onClick={() => handleSelect("en")} className='block w-full text-left px-3 py-2 hover:bg-gray-100 font-abc-diatype text-2xs'>EN</button>
                    <div className='h-px bg-ceramics' />
                    <button onClick={() => handleSelect("fr")} className='block w-full text-left px-3 py-2 hover:bg-gray-100 font-abc-diatype text-2xs'>FR</button>
                </div>
            )}
        </div>
    );
}



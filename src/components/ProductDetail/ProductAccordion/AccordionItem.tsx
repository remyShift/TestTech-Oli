import { useState } from 'react';
import { IoChevronUp } from 'react-icons/io5';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
    onToggle?: () => void;
}

export default function AccordionItem({ 
    title, 
    children, 
    isOpen = false, 
    onToggle,
}: AccordionItemProps) {
    const [internalIsOpen, setInternalIsOpen] = useState(isOpen);
    
    const handleToggle = () => {
        if (onToggle) {
        onToggle();
        } else {
        setInternalIsOpen(!internalIsOpen);
        }
    };

    const isExpanded = onToggle ? isOpen : internalIsOpen;

    return (
        <>
            <button
                onClick={handleToggle}
                className="w-full flex items-center justify-between py-4 px-0 text-left hover:bg-primary/30 transition-colors duration-200"
                aria-expanded={isExpanded}
                aria-controls={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
            >
                <h3 className="font-abc-diatype text-sm font-bold text-black">
                {title}
                </h3>
                <IoChevronUp 
                className={`w-4 h-4 text-black transition-transform duration-200 ${
                    isExpanded ? 'rotate-180' : 'rotate-0'
                }`}
                aria-hidden="true"
                />
            </button>
            
            <div
                id={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
                aria-hidden={!isExpanded}
            >
                <div className="pb-4 pt-2">
                {children}
                </div>
            </div>
        </>
    );
}

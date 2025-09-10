import { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

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
                className="w-full flex items-center justify-between py-3 text-left hover:bg-primary/30 transition-colors duration-200"
            >
                <h3 className="font-abc-diatype font-bold text-black">
                    {title}
                </h3>
                <IoChevronDown
                    className={`w-4 h-4 text-black transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : 'rotate-0'
                    }`}
                />
            </button>
            
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="pb-4 pt-2">
                    {children}
                </div>
            </div>
        </>
    );
}

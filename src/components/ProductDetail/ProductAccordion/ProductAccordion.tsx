import { useState } from 'react';
import AccordionItem from './AccordionItem';

interface AccordionData {
    id: string;
    title: string;
    content: React.ReactNode;
}

interface ProductAccordionProps {
    items: AccordionData[];
}

export default function ProductAccordion({ 
    items, 
}: ProductAccordionProps) {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const handleToggle = (itemId: string) => {
        setOpenItems(prev => {
            return prev.includes(itemId) 
            ? prev.filter(id => id !== itemId)
            : [...prev, itemId];
        })
    }

    return (
        <>
            {items.map((item) => (
                <AccordionItem
                key={item.id}
                title={item.title}
                isOpen={openItems.includes(item.id)}
                onToggle={() => handleToggle(item.id)}
                >
                {item.content}
                </AccordionItem>
            ))}
        </>
    );
}

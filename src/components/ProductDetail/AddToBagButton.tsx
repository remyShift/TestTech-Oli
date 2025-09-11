import { useState } from 'react';

export default function AddToBagButton({ 
    isFixed
}: {
    isFixed: boolean;
}) {
    const [isLoading, setIsLoading] = useState(false);

    const handleAddToBag = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            console.log('Produit ajouté au panier');
        }, 1000);
    };

    const baseClasses = `
        bg-black text-white font-abc-diatype font-bold 
        py-3 rounded-full transition-all duration-200 
        hover:bg-gray-800 active:scale-95
        disabled:bg-[#808080] disabled:cursor-not-allowed
        flex items-center justify-center gap-2
    `;

    const fixedClasses = isFixed 
        ? "fixed bottom-4 left-1/2 w-[95%] -translate-x-1/2 z-50 md:hidden" 
        : "md:block hidden";

    return (
        <button
            onClick={handleAddToBag}
            disabled={isLoading}
            className={`${baseClasses} ${fixedClasses}`}
        >
        {isLoading ? (
            <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span className="font-abc-diatype font-bold text-xs">ADDING...</span>
            </>
        ) : (
            <span className="font-abc-diatype font-bold text-xs">ADD TO BAG</span>
        )}
        </button>
    );
}

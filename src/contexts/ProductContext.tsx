import { createContext } from 'react';
import type { ProductContextType } from '@/types/productContext';

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export { ProductContext };

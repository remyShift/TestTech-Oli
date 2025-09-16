import ProductInteractions from './ProductInteractions';
import ProductImage from './ProductImages/ProductImage';
import ProductInfo from './ProductInfo/ProductInfo';
import ProductAccordion from './ProductAccordion/ProductAccordion';
import { createProductAccordionData } from './ProductAccordion/ProductAccordionDataFactory';
import ProductRating from './ProductInfo/ProductRating';
import { useBreakpoint } from '@/hooks/useBreakpoint';
import { useProductContext } from '@/hooks/useProductContext';

export default function CurrentProductDetail() {
	const { currentProduct } = useProductContext();
	const isLg = useBreakpoint('lg');

	if (!currentProduct) {
		return (
			<div className="flex justify-center items-center h-96">
				<p className="text-ceramics font-space-grotesk">Sélectionnez un produit pour voir les détails</p>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-4">
			<ProductInteractions />
			<div className="flex flex-col gap-4 lg:flex-row lg:items-center">
				{isLg && (
					<div className="lg:w-1/3">
						<ProductRating productRating={currentProduct.rating} />
						<ProductAccordion items={createProductAccordionData({
							whyOliLovesIt: currentProduct.whyOliLovesIt,
							howToUse: currentProduct.howToUse,
							ingredients: currentProduct.ingredients,
							concerns: currentProduct.concerns,
						})} />
					</div>	
				)}
				<ProductImage productImages={currentProduct.images} />
				<ProductInfo product={currentProduct} />
			</div>
		</div>
	);
}

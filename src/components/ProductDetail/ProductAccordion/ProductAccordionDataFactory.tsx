import type { Product } from '@/types/product';

export const createProductAccordionData = (product: Product) => [
	{
		id: 'why-oli-loves-it',
		title: 'WHY OLI LOVES IT',
		content: (
			<div className="font-space-grotesk text-sm text-ceramics leading-relaxed">
				<p>{product.whyOliLovesIt}</p>
			</div>
		),
	},
	{
		id: 'how-to-use',
		title: 'HOW TO USE',
		content: (
			<div className="font-space-grotesk text-sm text-ceramics leading-relaxed">
				<p>{product.howToUse}</p>
			</div>
		),
	},
	{
		id: 'ingredients-list',
		title: 'INGREDIENTS LIST',
		content: (
			<div className="font-space-grotesk text-sm text-ceramics leading-relaxed">
				<ul className="list-disc list-inside space-y-1">
					{product.ingredientsList.map((ingredient, index) => (
						<li key={index}>{ingredient}</li>
					))}
				</ul>
			</div>
		),
	},
	{
		id: 'skin-recommendation',
		title: 'SKIN RECOMMENDATION',
		content: (
			<div className="font-space-grotesk text-sm text-ceramics leading-relaxed">
				<p>{product.skinRecommendation}</p>
			</div>
		),
	},
];

import type { Product } from '@/types/product';

export const createProductAccordionData = (product: Product) => [
	{
		id: 'why-oli-loves-it',
		title: 'WHY OLI LOVES IT',
		content: (
			<div className="font-space-grotesk text-sm text-ceramics leading-relaxed">
				<p>{"Thoughtfully formulated and editor-approved. We love its texture and finish."}</p>
			</div>
		),
	},
	{
		id: 'how-to-use',
		title: 'HOW TO USE',
		content: (
			<div className="font-space-grotesk text-sm text-ceramics leading-relaxed">
				<p>{"Apply on clean skin. Use AM/PM as needed."}</p>
			</div>
		),
	},
	{
		id: 'ingredients-list',
		title: 'INGREDIENTS LIST',
		content: (
			<div className="font-space-grotesk text-sm text-ceramics leading-relaxed">
				<ul className="list-disc list-inside space-y-1">
					{(product.ingredients ? product.ingredients.split(',') : [])
						.map((s) => s.trim())
						.filter(Boolean)
						.map((ingredient, index) => (
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
				<p>{product.concerns}</p>
			</div>
		),
	},
];

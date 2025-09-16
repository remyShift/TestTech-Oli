interface ProductAccordionData {
	whyOliLovesIt: string;
	howToUse: string;
	ingredients: string;
	concerns: string;
}

export const createProductAccordionData = (productInfo : ProductAccordionData) => [
	{
		id: 'why-oli-loves-it',
		title: 'WHY OLI LOVES IT',
		content: (
			<div className="font-space-grotesk text-sm text-ceramics leading-relaxed">
				<p>{productInfo.whyOliLovesIt}</p>
			</div>
		),
	},
	{
		id: 'how-to-use',
		title: 'HOW TO USE',
		content: (
			<div className="font-space-grotesk text-sm text-ceramics leading-relaxed">
				<p>{productInfo.howToUse}</p>
			</div>
		),
	},
	{
		id: 'ingredients-list',
		title: 'INGREDIENTS LIST',
		content: (
			<div className="font-space-grotesk text-sm text-ceramics leading-relaxed">
				<ul className="list-disc list-inside space-y-1">
					{productInfo.ingredients.split(',')
						.map((s) => s.trim())
						.filter(Boolean)
						.map((ingredient, index: number) => (
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
				<p>{productInfo.concerns}</p>
			</div>
		),
	},
];

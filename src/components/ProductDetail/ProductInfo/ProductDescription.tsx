interface ProductDescriptionProps {
	productDescription: string;
}

export default function ProductDescription({
	productDescription,
}: ProductDescriptionProps) {
	return (
		<p className="font-abc-diatype text-ceramics leading-5">
			{productDescription}
		</p>
	);
}

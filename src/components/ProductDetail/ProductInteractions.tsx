import InteractionButton from './InteractionButton';

export default function ProductInteractions() {
	return (
		<div className="flex gap-2 justify-end lg:mb-24">
			<InteractionButton icon="arrow-up" text="SHARE" />
			<InteractionButton icon="plus" text="FAVORITE" />
		</div>
	);
}

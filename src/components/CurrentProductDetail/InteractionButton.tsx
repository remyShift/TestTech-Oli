import { MdAdd, MdArrowOutward } from 'react-icons/md';

type IconType = 'arrow-up' | 'plus';

export default function InteractionButton({
	icon,
	text,
}: {
	icon: IconType;
	text: string;
}) {
	return (
		<div className="flex bg-interaction hover:bg-ceramics transition-colors duration-200 rounded-full py-1.5 px-3 items-center gap-1 w-fit group cursor-pointer">
			{icon === 'arrow-up' ? (
				<MdArrowOutward className="text-2xs text-black group-hover:text-interaction transition-colors duration-200 cursor-pointer" />
			) : (
				<MdAdd className="text-2xs text-black group-hover:text-interaction transition-colors duration-200 cursor-pointer" />
			)}
			<span className="font-abc-diatype text-black group-hover:text-interaction text-3xs transition-colors duration-200 cursor-pointer">
				{text}
			</span>
		</div>
	);
}

import type { FooterSection } from './FooterCard';

export default function FooterLinkList(props: FooterSection) {
	const { title, links } = props;
	return (
		<div className="flex flex-col gap-4">
			<h4 className="font-abc-diatype text-ceramics text-2xs font-bold">
				{title}
			</h4>
			<div className="flex flex-col gap-2">
				{links.map((link) => (
					<a
						key={link.label}
						href={link.href}
						className="font-abc-diatype text-xs text-uppercase font-bold hover:underline"
					>
						{link.label}
					</a>
				))}
			</div>
		</div>
	);
}

import { useEffect, useState } from 'react';
import FooterCTA from './FooterCTA';
import FooterLinkList from './FooterLinkList';
import LanguageSelector from './LanguageSelector';

export type Language = 'en' | 'fr';

export interface FooterLinkItem {
	label: string;
	href: string;
}

export interface FooterSection {
	title: string;
	links: FooterLinkItem[];
}

const sections: FooterSection[] = [
	{
		title: 'QUICK LINKS',
		links: [
			{ label: 'SHOP', href: '#' },
			{ label: 'BRANDS', href: '#' },
			{ label: 'JOURNAL', href: '#' },
			{ label: 'ACTIVES', href: '#' },
		],
	},
	{
		title: 'SOCIAL',
		links: [
			{ label: 'INSTAGRAM', href: '#' },
			{ label: 'FACEBOOK', href: '#' },
			{ label: 'TIKTOK', href: '#' },
		],
	},
	{
		title: 'OTHER',
		links: [
			{ label: 'FAQ', href: '#' },
			{ label: 'CONTACT US', href: '#' },
			{ label: 'ABOUT US', href: '#' },
		],
	},
];

export default function FooterCard() {
	const [language, setLanguage] = useState<Language>('en');

	useEffect(() => {
		const saved = window.localStorage.getItem('oli_language');
		if (saved === 'en' || saved === 'fr') {
			setLanguage(saved);
		}
	}, []);

	return (
		<div className="bg-primary w-full rounded-xl p-7 h-footer flex flex-col justify-between">
			<FooterCTA
				heading="Take better care of yourself with Oli news & updates"
				ctaLabel="REGISTER NEWSLETTER"
				ctaHref="#"
			/>

			<div className="flex justify-between">
				{sections.map((section) => (
					<FooterLinkList
						key={section.title}
						title={section.title}
						links={section.links}
					/>
				))}
			</div>

			<div className="flex flex-col gap-2">
				<a
					href="#"
					className="font-abc-diatype text-2xs font-bold hover:underline"
				>
					PRIVACY POLICY
				</a>
				<a
					href="#"
					className="font-abc-diatype text-2xs font-bold hover:underline"
				>
					TERMS OF SERVICE
				</a>
				<LanguageSelector value={language} onChange={setLanguage} />
				<p className="font-abc-diatype text-ceramics text-2xs font-bold">
					©ALL RIGHTS RESERVED OLI'S LAB
				</p>
			</div>
		</div>
	);
}

import FooterCTA from "./FooterCTA";
import FooterLinkList from "./FooterLinkList";
import type { FooterSection } from "./types";

const sections: FooterSection[] = [
    {
        title: "QUICK LINKS",
        links: [
            { label: "SHOP", href: "#" },
            { label: "BRANDS", href: "#" },
            { label: "JOURNAL", href: "#" },
            { label: "ACTIVES", href: "#" },
        ],
    },
    {
        title: "SOCIAL",
        links: [
            { label: "INSTAGRAM", href: "#" },
            { label: "FACEBOOK", href: "#" },
            { label: "TIKTOK", href: "#" },
        ],
    },
    {
        title: "OTHER",
        links: [
            { label: "FAQ", href: "#" },
            { label: "CONTACT US", href: "#" },
            { label: "ABOUT US", href: "#" },
        ],
    },
];

export default function FooterCard() {
    return (
        <div className='bg-primary w-full rounded-xl p-7 h-96 flex flex-col justify-between'>
            <FooterCTA
                heading="Take better care of yourself with Oli news & updates"
                ctaLabel="REGISTER NEWSLETTER"
                ctaHref="#"
            />

            <div className='flex justify-between'>
                {sections.map((section) => (
                    <FooterLinkList key={section.title} title={section.title} links={section.links} />
                ))}
            </div>
        </div>
    );
}

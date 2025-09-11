export interface FooterLinkItem {
    label: string;
    href: string;
}

export interface FooterSection {
    title: string;
    links: FooterLinkItem[];
}

export interface FooterCTAProps {
    heading: string;
    ctaLabel: string;
    ctaHref: string;
}

export type Language = "en" | "fr";



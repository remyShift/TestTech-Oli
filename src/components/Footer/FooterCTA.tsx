import type { FooterCTAProps } from "./types";

export default function FooterCTA(props: FooterCTAProps) {
    const { heading, ctaLabel, ctaHref } = props;
    return (
        <div className='flex flex-col gap-6'>
            <h3 className='font-space-grotesk text-2xl'>
                {heading}
            </h3>
            <div className='flex items-center gap-2 hover:underline'>
                <div className="w-2 h-2 bg-black rounded-full" />
                <a href={ctaHref} className='font-space-grotesk text-sm text-uppercase font-bold'>{ctaLabel}</a>
            </div>
        </div>
    );
}



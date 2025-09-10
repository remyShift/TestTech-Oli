export default function NavLink( { href, text }: { href: string, text: string } ) {
    return (
        <a href={href} className='font-abc-diatype text-sm font-bold hover:underline'>{text}</a>
    )
}

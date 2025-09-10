export default function NavLink( { href, text }: { href: string, text: string } ) {
    return (
        <a href={href} className='font-abc-diatype font-bold hover:underline'>{text}</a>
    )
}

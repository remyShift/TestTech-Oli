import logo from '../../assets/images/oli-logo.png'
import NavLink from './NavLink'
import ItemCounter from './ItemCounter'

export default function Header() {
    return (
        <div className='w-full h-10 pt-2 flex justify-between'>
            <div className='flex items-center gap-4'>
                <img src={logo} alt='logo' className='h-8 w-auto object-contain' />
                <NavLink href='/' text='MENU' />
            </div>

            <div className='flex items-center gap-6'>  
                <NavLink href='/' text='PROFILE' />
                <div className='flex items-center gap-3'>
                    <NavLink href='/' text='BAG' />
                    <ItemCounter />
                </div>
            </div>
        </div>
    )
}

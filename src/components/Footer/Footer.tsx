import FooterCard from "./FooterCard"

export default function Footer() {
    return (
        <div className='footer-bg w-full p-3'>
            <FooterCard />

            <div className='flex flex-col gap-2'>   
                <img src="src/assets/images/oli-logo.png" alt="Oli Lab" className='w-auto h-6 object-contain bg-primary' />
            </div>
        </div>
    )
}

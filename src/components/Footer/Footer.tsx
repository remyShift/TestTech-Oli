import FooterCard from "./FooterCard"

export default function Footer() {
    return (
        <div className='flex flex-col gap-12 footer-bg w-full p-3'>
            <FooterCard />

            <div className='h-32 flex flex-col gap-2'>   
                <div className='w-auto h-12 logo-primary' />
                <p className='font-space-grotesk text-primary text-center'>Take better care of yourself</p>
            </div>
        </div>
    )
}

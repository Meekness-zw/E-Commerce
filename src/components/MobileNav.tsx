'use client';
import { Sheet, SheetContent, SheetTrigger } from '../components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuBurger } from "react-icons/ci"

const links = [
    {
        name: 'Shop',
        path: '/',
    },
    {
        name: 'On Sale',
        path: '/',
    },
    {
        name: 'New Arrivals',
        path: '/',
    },
    {
        name: 'Brands',
        path: '/',
    },
]

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <div className='lg:hidden'>
            <Sheet>
                <SheetTrigger className='flex justify-center items-center'>
                    <CiMenuBurger className=' text-[32px] text-accent' />
                </SheetTrigger>
                <SheetContent className='flex flex-col'>
                    <div className='mt-32 mb-40 text-center text-2xl'>
                        <Link href="/">
                            <h1 className='text-4xl font-extrabold'>SHOP<span className='text-accent'>.CO</span></h1>
                        </Link>
                    </div>
                    <nav className='flex flex-col justify-center items-center gap-8 font-primary'>
                        {links.map((link, index) => {
                            return (
                                <Link href={link.path} key={index} className={`${link.path === pathname && 'text-black'}text-xl capitalize hover:text-accent transition-all`}>
                                    {link.name}
                                </Link>
                            )
                        })}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav

'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import { deleteCookie } from 'cookies-next/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const isAuth = useAuth();
    const router = useRouter();
    const getUserInfo: any = isAuth && localStorage.getItem('user-info');
    const userInfo = JSON.parse(getUserInfo);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLogout = () => {
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        localStorage.removeItem('user-info');
        router.refresh();
    };
    return (
        <div className={`fixed z-1 w-[100dvw] transition-all duration-300 text-white ${scrolled ? 'bg-black shadow-md' : 'bg-black'} z-99`}>
            <div className="appContainer flex items-center justify-between h-[60px]">
                <div>
                    <Link href="/">
                        <p className={`font-black text-2xl`}>LOGO</p>
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <NavMenuItems />
                </div>
                <div className="flex items-center gap-4 ">
                    {isAuth ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar className="cursor-pointer hover:ring-4 hover:ring-primary/60">
                                    <AvatarImage src={userInfo?.image} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-black text-white border-white/10">
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive" onClick={handleLogout}>
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <AuthButtons />
                    )}
                </div>
            </div>
        </div>
    );
}

export function AuthButtons() {
    return (
        <>
            <Link href="/login">
                <Button>Get Started</Button>
            </Link>
        </>
    );
}

export function NavMenuItems() {
    const menu = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'About',
            url: '/about',
        },
        {
            name: 'Contact',
            url: '/contact',
        },
    ];
    return (
        <>
            {menu?.map((d: any) => (
                <Link href={d.url} key={d?.name} className={`font-bold text-white cursor-pointer hover:text-gray-400`}>
                    <p>{d.name}</p>
                </Link>
            ))}
        </>
    );
}

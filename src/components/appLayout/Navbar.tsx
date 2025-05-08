'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import { deleteCookie } from 'cookies-next/client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { File, Group, LogOut, User } from 'lucide-react';

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
                            <DropdownMenuTrigger className="focus:outline-none">
                                <Avatar className="cursor-pointer hover:ring-4 hover:ring-primary/60">
                                    <AvatarImage src={userInfo?.image} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-black text-white border-white/10 mt-3">
                                <DropdownMenuItem>
                                    <User className="text-white mr-2" /> Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <File className="text-white mr-2" /> Billing
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Group className="text-white mr-2" /> Team
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    className="text-destructive font-semibold border-t border-gray-800"
                                    onClick={handleLogout}
                                >
                                    <LogOut className="text-destructive mr-2" />
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

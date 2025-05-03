'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

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
                    <AuthButtons />
                </div>
            </div>
        </div>
    );
}

export function AuthButtons() {
    return (
        <>
            <Link href="/signup">
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
                <Link href={d.url} key={d?.name} className={`font-bold text-white hover:cursor-pointer`}>
                    <p>{d.name}</p>
                </Link>
            ))}
        </>
    );
}

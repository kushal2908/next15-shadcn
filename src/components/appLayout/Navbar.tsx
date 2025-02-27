'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';

type Props = {};

export default function Navbar({}: Props) {
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
        <div className={`fixed z-1 w-[100vw] transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : ''}`}>
            <div className="flex items-center justify-between h-[60px] container mx-auto ">
                <div>
                    <Link href="/">
                        <p className="font-black text-gray-800 text-2xl">LOGO</p>
                    </Link>
                </div>
                <div className="flex items-center gap-4 ">
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
            <Link href="/login">
                <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
                <Button>Signup</Button>
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
                <Link href={d.url} key={d?.name} className="font-bold text-gray-800 hover:text-gray-600 hover:cursor-pointer">
                    <p>{d.name}</p>
                </Link>
            ))}
        </>
    );
}

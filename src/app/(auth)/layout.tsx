'use client';
import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { redirect } from 'next/navigation';

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    const isAuth = useAuth();

    if (isAuth) return redirect('/');

    return <div>{children}</div>;
}

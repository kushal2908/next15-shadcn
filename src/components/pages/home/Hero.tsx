'use client';
import { Button } from '@/components/ui/button';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import Image from 'next/image';

type Props = {};

export default function Hero({}: Props) {
    return (
        <div className="flex flex-col justify-center items-center">
            <HeroGeometric badge="Kokonut UI" title1="Elevate Your" title2="Digital Vision" />
        </div>
    );
}

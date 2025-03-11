'use client';
import Image from 'next/image';
import classes from './style.module.css';
import { useEffect } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

export default function Hero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    return (
        <div>
            {/* <HeroGeometric badge="Kokonut UI" title1="Elevate Your" title2="Digital Vision" /> */}
            <section className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {img?.map((d: any) => (
                            <div className="embla__slide" key={d}>
                                <img src={d} alt="image" className="h-[600px] w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 opacity-100"></div>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-[40%] left-[4%] -translate-x-[4%] -translate-y-[40%]">
                        <h1 className="text-4xl font-bold text-gray-50">Title</h1>
                        <h1 className="text-xl font-bold text-gray-100">Subtitle</h1>
                    </div>
                </div>
            </section>
        </div>
    );
}

const img = [
    'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ,
    'https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ,
    'https://images.unsplash.com/photo-1539634262233-7c0b48ab9503?q=80&w=1725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ,
];

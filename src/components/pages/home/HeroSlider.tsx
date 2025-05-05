'use client';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

export default function HeroSlider() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {img?.map((d: any) => (
                        <div className="embla__slide" key={d}>
                            <Image src={d} alt="image" width={600} height={600} className="h-[600px] w-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-800 opacity-70"></div>
                        </div>
                    ))}
                </div>
                <div className="absolute top-[32%] left-[50%] -translate-x-[50%] -translate-y-[32%]">
                    <h1 className="text-[90px] font-black text-gray-50"></h1>
                </div>
            </div>
        </section>
    );
}
const img = ['/hero-1.jpg', , '/hero-2.jpg'];

import Image from 'next/image';
import React from 'react';

type Props = {};

export default function page({}: Props) {
    return (
        <section>
            <div className="bg-white min-h-[300px] flex justify-center items-center ">
                <div className="appContainer grid grid-cols-1 md:grid-cols-2 items-center py-[60px]">
                    <div className="flex flex-col justify-start mb-12 md:mb-0 px-4">
                        <h1 className="font-bold text-primary text-[50px] leading-tight">About us</h1>
                        <p className="font-medium text-muted-foreground text-[18px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit doloribus eveniet reiciendis alias quibusdam
                            totam consequuntur placeat error magnam delectus.{' '}
                        </p>
                    </div>
                    <div>
                        <Image
                            src={
                                'https://www.hashicorp.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F2885%2F1723476297-tf-overview-hero.png&w=3840&q=75'
                            }
                            width={400}
                            height={500}
                            alt="alt"
                            className="object-fit ml-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="appContainer"></div>
        </section>
    );
}

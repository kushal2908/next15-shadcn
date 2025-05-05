import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <div className="min-h-screen bg-black/95  flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 text-center">
                    <div className="mb-8">
                        <h2 className="mt-6 text-6xl font-extrabold text-gray-200 ">404</h2>
                        <p className="mt-1 text-3xl font-bold text-gray-400 ">Page not found</p>
                        <p className="mt-2 text-sm text-gray-500 ">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
                    </div>
                    <div className="mt-2">
                        <Link href="/">
                            <Button>
                                Go back home{' '}
                                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18m-9-9l9 9-9 9" />
                                </svg>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

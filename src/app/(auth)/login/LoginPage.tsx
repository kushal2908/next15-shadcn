'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { loginUser } from './action';

type FormValues = {
    username: string;
    password: string;
};
const formSchema = (step: 'username' | 'password') =>
    z.object({
        username: step === 'username' ? z.string({ message: 'Invalid username address' }) : z.string(),
        password: step === 'password' ? z.string({ message: 'Invalid password ' }) : z.string(),
    });

export default function LoginPage() {
    const [step, setStep] = useState<'username' | 'password'>('username');
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(formSchema(step)),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    function onUsernameSubmit(values: FormValues) {
        if (!values.username) {
            return toast.error('Please enter your username address');
        }
        setStep('password');
    }
    async function onPasswordSubmit(values: FormValues) {
        try {
            const data = await loginUser(values);
            delete data.accessToken;
            delete data.refreshToken;
            localStorage.setItem('user-info', JSON.stringify(data));
            toast.success('Login Success');
            form.reset();
            router.push('/');
        } catch (error: any) {
            console.error('Form submission error', error?.response?.data?.message);
            toast.error(error?.response?.data?.message || 'Failed to submit the form. Please try again.');
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(step === 'username' ? onUsernameSubmit : onPasswordSubmit)}
                className="space-y-4 max-w-3xl mx-auto py-0"
            >
                {step === 'username' && (
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your username" type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}

                {step === 'password' && (
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your password" type="password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}
                <div>
                    <p className="text-sm">
                        Already have and account?{' '}
                        <Link href="/signup" className="text-blue-500 font-bold">
                            Signup
                        </Link>
                    </p>
                </div>
                <Button type="submit" className="w-full">
                    {step === 'username' ? 'Start' : 'Login'}
                </Button>
            </form>
        </Form>
    );
}

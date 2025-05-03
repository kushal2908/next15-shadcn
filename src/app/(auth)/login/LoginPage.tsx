'use client';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

type FormValues = {
    email: string;
    password: string;
};
const formSchema = (step: 'email' | 'password') =>
    z.object({
        email: step === 'email' ? z.string().email({ message: 'Invalid email address' }) : z.string(),
        password: step === 'password' ? z.string({ message: 'Invalid password ' }) : z.string(),
    });

export default function LoginPage() {
    const [step, setStep] = useState<'email' | 'password'>('email');
    console.log(step);

    const form = useForm({
        resolver: zodResolver(formSchema(step)),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    function onEmailSubmit(values: FormValues) {
        if (!values.email) {
            return toast.error('Please enter your email address');
        }
        setStep('password');
    }
    function onPasswordSubmit(values: FormValues) {
        try {
            toast.success('Success');
            // form.reset();
        } catch (error) {
            console.error('Form submission error', error);
            toast.error('Failed to submit the form. Please try again.');
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(step === 'email' ? onEmailSubmit : onPasswordSubmit)}
                className="space-y-4 max-w-3xl mx-auto py-0"
            >
                {step === 'email' && (
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" type="text" {...field} />
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
                    {step === 'email' ? 'Start' : 'Login'}
                </Button>
            </form>
        </Form>
    );
}

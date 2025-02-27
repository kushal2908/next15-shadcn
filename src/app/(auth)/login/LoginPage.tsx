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
type Props = {};

const formSchema = (step: 'phone' | 'otp') =>
    z.object({
        phoneNo:
            step === 'phone' ? z.string().min(11, { message: 'Invalid phone no' }).max(14, { message: 'Invalid phone no' }) : z.string(), // No validation needed in OTP step
        otp: step === 'otp' ? z.string().min(4, { message: 'Invalid OTP' }).max(4, { message: 'Invalid OTP' }) : z.string(), // No validation needed in Phone step
    });

export default function LoginPage({}: Props) {
    const [step, setStep] = useState<'phone' | 'otp'>('phone');

    const form = useForm({
        resolver: zodResolver(formSchema(step)),
        defaultValues: {
            phoneNo: '',
            otp: '',
        },
    });

    function onPhoneNoSubmit(values: any) {
        try {
            toast.success('Phone no submitted');
            // form.reset();
            setStep('otp');
        } catch (error) {
            console.error('Form submission error', error);
            toast.error('Failed to submit the form. Please try again.');
        }
    }
    function onOTPSubmit(values: any) {
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
                onSubmit={form.handleSubmit(step === 'phone' ? onPhoneNoSubmit : onOTPSubmit)}
                className="space-y-4 max-w-3xl mx-auto py-0"
            >
                {step === 'phone' && (
                    <FormField
                        control={form.control}
                        name="phoneNo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Phone No</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your phone number" type="text" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                )}

                {step === 'otp' && (
                    <FormField
                        control={form.control}
                        name="otp"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Enter OTP</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter 4 digit otp" type="text" {...field} />
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
                    {step === 'phone' ? 'Get OTP' : 'Login'}
                </Button>
            </form>
        </Form>
    );
}

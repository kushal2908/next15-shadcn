'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { motion } from 'framer-motion';
import Link from 'next/link';
const formSchema = z.object({
    name: z.string().min(4, {
        message: 'Name must be at least 4 characters.',
    }),
    phoneNo: z
        .string()
        .min(11, {
            message: 'Invalid phone no',
        })
        .max(14, {
            message: 'Invalid phone no',
        }),
    email: z.string(),
    address: z.string().max(255),
    area: z.string().max(255),
    city: z.string().max(255),
    termsAndCondition: z.boolean().refine((val) => val === true, {
        message: 'You must accept the terms and conditions',
    }),
});

export default function SignupForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            phoneNo: '',
            email: '',
            address: '',
            area: '',
            city: '',
            termsAndCondition: false,
        },
    });

    function onSubmit(values: any) {
        try {
            toast.success('Submitted');
            // form.reset();
        } catch (error) {
            console.error('Form submission error', error);
            toast.error('Failed to submit the form. Please try again.');
        }
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-3xl mx-auto py-0">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your full name" type="text" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-6">
                            <FormField
                                control={form.control}
                                name="phoneNo"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col items-start">
                                        <FormLabel>Phone Number</FormLabel>
                                        <FormControl className="w-full">
                                            <Input placeholder="Enter your phone number" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your email" type="email" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Address</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="eg: House:1, road:5" className="resize-none" {...field} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 md:col-span-6">
                            <FormField
                                control={form.control}
                                name="area"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Area</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g: Gulshan" type="text" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <FormField
                                control={form.control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>City</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g: Dhaka" type="text" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <FormField
                        control={form.control}
                        name="termsAndCondition"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <div className="leading-none">
                                    <FormLabel>Accept terms and condition</FormLabel>
                                    <FormDescription>You agree to our Terms of Service and Privacy Policy.</FormDescription>
                                    <FormMessage />
                                </div>
                            </FormItem>
                        )}
                    />
                    <div>
                        <p className="text-sm">
                            Already have and account?{' '}
                            <Link href="/login" className="text-blue-500 font-bold">
                                Login
                            </Link>
                        </p>
                    </div>
                    <Button type="submit" className="w-full">
                        Signup
                    </Button>
                </form>
            </Form>
        </>
    );
}

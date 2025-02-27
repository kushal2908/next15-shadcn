'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SignupForm from './SignupForm';
import { motion } from 'framer-motion';

type Props = {};

export default function SignUp({}: Props) {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 }, // Start off-screen (below)
        visible: {
            opacity: 1,
            y: 0, // Move into place
            transition: { duration: 0.3, ease: 'easeOut' },
        },
    };
    return (
        <>
            <motion.div
                className="flex items-center justify-center min-h-[100vh] bg-gray-100 "
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <motion.div variants={cardVariants} className="my-14">
                    <Card className="min-w-[300px]">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-gray-700">Signup</CardTitle>
                            <CardDescription className="text-gray-800 text-sm font-medium">
                                Create an account to get started with our services.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <SignupForm />
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </>
    );
}

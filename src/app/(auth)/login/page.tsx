'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import LoginPage from './LoginPage';
type Props = {};

export default function page({}: Props) {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 }, // Start off-screen (below)
        visible: {
            opacity: 1,
            y: 0, // Move into place
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };
    return (
        <div>
            <motion.div className="flex items-center justify-center h-[100vh] bg-gray-100" initial="hidden" animate="visible" exit="hidden">
                <motion.div variants={cardVariants}>
                    <Card className="w-md">
                        <CardHeader>
                            <CardTitle className="text-3xl font-bold text-gray-700">login</CardTitle>
                            <CardDescription className="text-gray-800 text-sm font-medium">
                                Welcome back! Enter your details to continue.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LoginPage />
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>
        </div>
    );
}

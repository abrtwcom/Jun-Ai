'use client';

import { motion } from 'framer-motion';
import * as React from 'react';

import { cn, safeStyle } from '@/lib/utils';

interface GradientBackgroundProps {
    baseColor?: string;
    className?: string;
}

export function GradientBackground({
    baseColor = 'rgb(99, 102, 241)',
    className,
}: GradientBackgroundProps) {
    return (
        <motion.div
            className={cn('absolute inset-0 auth-card-gradient', className)}
            style={safeStyle({
                background: `linear-gradient(45deg, ${baseColor}15, ${baseColor}45, ${baseColor}15)`,
                backgroundSize: '200% 200%',
                zIndex: -1,
            })}
            animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
            }}
        />
    );
}

'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ComparisonSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export default function ComparisonSlider({
    beforeImage,
    afterImage,
    beforeLabel = 'Before',
    afterLabel = 'After',
}: ComparisonSliderProps) {
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [sliderPosition, setSliderPosition] = useState(50); // percentage

    const handleMove = (clientX: number) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    };

    const onMouseDown = () => setIsResizing(true);
    const onMouseUp = () => setIsResizing(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizing) return;
            handleMove(e.clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (!isResizing) return;
            handleMove(e.touches[0].clientX);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', onMouseUp);
        };
    }, [isResizing]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[16/10] rounded-[3rem] overflow-hidden select-none cursor-ew-resize group touch-none shadow-2xl"
            onMouseDown={onMouseDown}
            onTouchStart={onMouseDown}
        >
            {/* After Image (Background) */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${afterImage})` }}
            />

            {/* Before Image (Overlay with Clip Path) */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${beforeImage})`,
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
            />

            {/* Slider Line */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
                    <div className="flex items-center space-x-0.5 text-aria-teal">
                        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </div>
                </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-6 left-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="bg-aria-teal/80 backdrop-blur-md text-white text-[9px] px-4 py-1.5 rounded-full uppercase tracking-[0.2em] font-sans font-bold border border-white/10">
                    {beforeLabel}
                </span>
            </div>
            <div className="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="bg-aria-gold/90 backdrop-blur-md text-white text-[9px] px-4 py-1.5 rounded-full uppercase tracking-[0.2em] font-sans font-bold border border-white/10">
                    {afterLabel}
                </span>
            </div>
        </div>
    );
}

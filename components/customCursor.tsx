"use client";

import { useEffect, useRef } from 'react';

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current) {
                const x = e.clientX - 12;
                const y = e.clientY - 12;

                cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
        };

        // 5. Add event listener to the window
        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            id="cursor"
            className="fixed top-0 left-0 hidden lg:block h-6 w-6 rounded-full bg-white mix-blend-difference z-50 pointer-events-none"
            style={{ willChange: 'transform' }}
        />
    );
}
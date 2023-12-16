"use client";
import React from 'react'
import Lenis from '@studio-freight/lenis'

export const InitLenisScroll: React.FC = () => {
    React.useEffect(() => {
        const lenis = new Lenis({
            duration: 0.82,
            easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            orientation: 'vertical'
        })

        const raf = (time: any) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            //@ts-expect-error raf
            window.cancelAnimationFrame(raf);
            lenis.destroy()
        }
    }, [])
    return null
}

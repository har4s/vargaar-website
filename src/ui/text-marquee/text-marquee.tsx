"use client";
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import s from "./text-marquee.module.css"
import { cn } from 'lib/utils'
gsap.registerPlugin(ScrollTrigger)

interface Props {
    className?: string
    children?: React.ReactNode
}

export const TextMarquee: React.FC<Props> = ({ className, children }) => {
    const span = useRef<HTMLSpanElement>(null)
    useLayoutEffect(() => {
        const TL = gsap.to(span.current, {
            // @ts-expect-error ---
            scrollTrigger: {
                trigger: span.current,
                scrub: true,
                top: 'top center'
            },
            // @ts-expect-error ---
            x: () => + (span.current!.offsetWidth - span.current!.parentNode!.offsetWidth)
        });
        return () => {
            TL.kill()
        }
    }, [])
    return (
        <span ref={span} className={cn(s.root, className)}>
            {children}
        </span>
    )
}

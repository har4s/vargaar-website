"use client";


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
interface Props {
    children?: React.ReactNode
}

type PrllxElement = Element & {
    scrollTrigger?: ScrollTrigger
    tl?: gsap.core.Timeline
}

export const ViewPrllx: React.FC<Props> = ({ children }) => {
    const container = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const elems = (container && container.current?.querySelectorAll("[data-prllxfrom]"))!
        // Create PrllxElement
        elems.forEach((el) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const element: PrllxElement = el as any
            const { parentNode } = el
            const prllxStart = element.getAttribute("data-prllxstart") || "top bottom"
            const prllxEnd = element.getAttribute("data-prllxend") || "bottom top"

            element.scrollTrigger = ScrollTrigger.create({
                trigger: parentNode as HTMLDivElement,
                start: prllxStart,
                end: prllxEnd,
                onUpdate: self => {
                    if (element.tl) element.tl.progress(self.progress)
                }
            })

            element.tl = gsap.timeline({
                paused: true,
                defaults: {
                    duration: 1,
                    ease: 'none'
                }
            })

            const prllxFrom = element.getAttribute("data-prllxfrom") || "{}"
            const prllxTo = element.getAttribute("data-prllxto") || "{}"
            const from: unknown = JSON.parse(prllxFrom)
            const to: unknown = JSON.parse(prllxTo)

            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            element.tl.fromTo(el, from as any, to as any)
        })

        return () => {
            elems.forEach((el) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                const element: PrllxElement = el as any
                element.tl?.kill()
            })
        }
    }, [])
    return (
        <div ref={container}>
            {children}
        </div>
    )
}

"use client";
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap';
import { FacebookIcon, InstagramIcon } from 'lucide-react'
import s from "./social-media-section.module.css"
import { cn } from 'lib/utils'

interface Props {
    className?: string
}

export const SocialMediaSection: React.FC<Props> = ({ className }) => {
    const container = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const images = (container && container.current?.querySelectorAll('.imgContainer'))!
        const TL = gsap.timeline({
            paused: true,
            defaults: { ease: 'power4.out', duration: 1.2 },
            scrollTrigger: {
                trigger: container.current,
                start: 'top bottom-=35%',
                end: 'bottom top',
                onEnter: () => TL.invalidate().timeScale(1).restart(),
                onLeaveBack: () => TL.timeScale(3).reverse(),
            },
        })
        TL.fromTo(images, { y: () => -(window.innerHeight * 0.8), rotate: 0 }, { y: 0, rotate: () => gsap.utils.random(-20, 20), stagger: 0.05 })

        return () => {
            TL.kill()
        }
    }, [])

    return (
        <section ref={container} className={cn(s.root, className)}>
            <div className={s.Container}>
                <div className={s.txt}>
                    <h4 className={s.title}>
                        قهوه ورگار را در شبکه های اجتماعی دنبال کنید
                        <strong>
                            _______________
                        </strong>
                    </h4>
                    <div className={s.icons}>
                        <div>
                            <a href="https://www.instagram.com/" target="_blank">
                                <InstagramIcon />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/" target="_blank">
                                <FacebookIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={s.images}>
                    <div className={cn(s.imageContainer, "imgContainer")}>
                        <Image className={cn(s.image)} src="/feed1-580x580-c-default.jpg" alt='' fill />
                    </div>
                    <div className={cn(s.imageContainer, "imgContainer")}>
                        <Image className={cn(s.image)} src="/feed2-580x580-c-default.jpg" alt='' fill />
                    </div>
                    <div className={cn(s.imageContainer, "imgContainer")}>
                        <Image className={cn(s.image)} src="/feed3-580x580-c-default.jpg" alt='' fill />
                    </div>
                </div>
            </div>
        </section>
    )
}

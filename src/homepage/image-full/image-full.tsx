import React from 'react'
import Image from 'next/image'
import { type StaticImport } from 'next/dist/shared/lib/get-img-props'
import s from "./image-full.module.css"
import { cn } from 'lib/utils'


interface Props {
    children?: React.ReactNode
    className?: string
    src: string | StaticImport
    alt?: string
}

export const ImageFull: React.FC<Props> = ({ className, src, alt, children }) => {
    return (
        <div className={cn(s.root, className)}>
            <Image
                className={s.image}
                src={src}
                alt={alt as string}
                fill
                data-prllxfrom="{&quot;yPercent&quot; : &quot;-20&quot;}"
                data-prllxto="{&quot;yPercent&quot; : &quot;0&quot;}"
                data-prllxstart="top bottom"
                data-prllxend="bottom top"
            />
            {children}
        </div>
    )
}

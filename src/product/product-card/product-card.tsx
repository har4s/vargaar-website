import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import s from "./product-card.module.css"
import { cn } from 'lib/utils'
import type { Product } from 'lib/types'
import { Price } from 'ui/price'


interface Props {
    className?: string
    product: Product
}

export const ProductCard: React.FC<Props> = ({ className }) => {
    return (
        <article className={cn(s.root, className)}>
            <div className={cn(s.container)}>
                <Link href="#" >
                    <div className={s.thumbnailContainer}>
                        <Image className={s.thumbnail} src="/bio-nature-0x600-c-default.png" alt="" fill />
                    </div>
                </Link>
                <div className={s.details}>
                    <h3 className={s.name}>
                        <Link href="#">میکس قهوه 70/30 عربیکا</Link>
                    </h3>
                    <Price amount='1000000' className={s.price} />
                </div>
            </div>
        </article>
    )
}

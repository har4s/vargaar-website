import React from 'react'
import s from "./product-list.module.css"
import { cn } from 'lib/utils'
import type { Product } from 'lib/types'
import { ProductCard } from 'product'

interface Props {
    className?: string
    products: Product[]
}

export const ProductList: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn(s.root, className)}>
            <div className={s.Container}>
                {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    [...Array(7)].map((_, idx) => (
                        <ProductCard key={idx} className={s.product} product={{}} />
                    ))
                }
            </div>
        </div>
    )
}

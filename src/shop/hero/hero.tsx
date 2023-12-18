import React from 'react'
import s from "./hero.module.css"
import { cn } from 'lib/utils'

interface Props {
    className?: string
}

export const Hero: React.FC<Props> = ({ className }) => {
    return (
        <section className={cn(s.root, className)}>
            <div className={s.Container}>
                <h1 className={s.title}>
                    فروشگاه برشته کاری ورگار
                </h1>
                <p className={s.subtitle}>
                    برای بیش از 160 سال، Leroux به لطف دانش منحصر به فرد، محصولات با کیفیت را به شما ارائه می دهد. با طیف محصولات Leroux آشنا شوید. و چیزی برای همه وجود دارد! مایع، محلول یا دانه ای: انتخاب خود را انجام دهید!
                </p>
            </div>
        </section>
    )
}

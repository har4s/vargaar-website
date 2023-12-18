import React from 'react'
import s from "./intro-txt.module.css"
import { cn } from 'lib/utils'

interface Props {
    className?: string
}

export const IntroTxt: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn(s.root, className)}>
            <div className={s.Container}>
                <h2 className={s.title}>
                    یک کاسنی 100% فرانسوی
                </h2>
                <div className={s.content}>
                    <p>
                        از سال 1858، ما روزانه در بخش کاسنی سرمایه گذاری می کنیم. از زمین به جام، ما با همه ذینفعان کار می کنیم. کاشت، خشک کن، برشته کن: با هم کاسنی خود را رشد و پردازش می کنیم.
                        <br />
                        Chicorée Leroux هنوز در Hauts-de-France کشت و پردازش می شود، نوشیدنی داغ محلی بی نظیر است!
                    </p>
                    <p>
                        بنابراین، چرا اجازه نمی دهید توسط Chicorée Leroux متقاعد شوید؟
                    </p>
                </div>
            </div>
        </div>
    )
}

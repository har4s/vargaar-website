import React from 'react'
import Link from 'next/link'
import s from "./filters.module.css"
import { cn } from 'lib/utils'
import type { Menu } from 'lib/types'

interface Props {
    className?: string
    menu: Menu
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <nav className={cn(s.root, className)}>
            <div className={s.Container}>
                <ul className={s.list}>
                    {data.children.map((item, idx) => (
                        <li key={idx} className={s.item}>
                            <Link href={item.path} className={s.link}>
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

const data: Menu = {
    title: "shop-menu",
    path: "#",
    children: [
        {
            title: "همه محصولات",
            path: "/shop/",
            children: []
        },
        {
            title: "قهوه های ترکیبی",
            path: "/shop/test/",
            children: []
        },
        {
            title: "پودر ها و نوشیدنی های فوری",
            path: "/shop/test/",
            children: []
        },
        {
            title: "تجهیزات قهوه",
            path: "/shop/accessory/",
            children: []
        },
    ],
}

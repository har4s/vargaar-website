import { Rial } from "./rial";

export const Price = ({
    amount,
    className,
}: {
    amount: string;
    className?: string;
} & React.ComponentProps<'p'>) => {
    const price = new Rial({
        decimal: ",",
        alphabet: "fa",
        currency: "تومان",
        cut: 1,
    }).get(amount)

    if (price === 0) return null

    return (
        <span suppressHydrationWarning={true} className={className}>
            {price}
        </span>
    )
};

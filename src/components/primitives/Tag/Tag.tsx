import type React from "react"
import { TagStyles } from "./Tag.styles"
import type { VariantProps } from "class-variance-authority"
import clsx from "clsx"

type tagProps = {
    children?: React.ReactNode,
} & VariantProps<typeof TagStyles>
& React.HTMLAttributes<HTMLSpanElement>;

export const Tag = ({
    children, 
    variant,
    size,
    className,
    ...props}: 
    tagProps) => {
        return(
            <span 
            className={clsx(TagStyles({variant, size}), className)}
            {...props}>
                {children}
            </span>
        )
    }



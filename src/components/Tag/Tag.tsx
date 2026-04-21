import type React from "react"
import { TagStyles } from "./Tag.styles"
import type { VariantProps } from "class-variance-authority"
import clsx from "clsx"

type tagProps = {
    children?: React.ReactNode,
    className?: string
} & VariantProps<typeof TagStyles>

export const Tag = ({
    children, 
    variant,
    size,
    className}: 
    tagProps) => {
        return(
            <span 
            className={clsx(TagStyles({variant, size}), className)}>
                {children}
            </span>
        )
    }



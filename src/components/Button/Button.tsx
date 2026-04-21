import type React from "react"
import { buttonStyles } from "./Button.styles"
import type { VariantProps } from "class-variance-authority"
import clsx from "clsx"

type ButtonProps = {
    children: React.ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    className?: string
} & VariantProps<typeof buttonStyles>

export const Button = 
    ({children, 
    onClick, 
    disabled = false,
    variant,
    size,
    className
    }: ButtonProps) => {

    return(
        <button onClick={disabled ? undefined : onClick}
                disabled={disabled}
                className={clsx(buttonStyles({ variant, size, disabled }), className)}>
            {children}
        </button>
    )
}
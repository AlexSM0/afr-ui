import type React from "react"
import { buttonStyles } from "./Button.styles"
import type { VariantProps } from "class-variance-authority"
import clsx from "clsx"
import { Search } from "lucide-react"

type ButtonProps = {
    children: React.ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    className?: string,
    rightIcon?: React.ReactNode,
} & VariantProps<typeof buttonStyles>

export const Button = 
    ({children = "Lore Ipsum", 
    onClick, 
    disabled = false,
    variant,
    size,
    rightIcon = <Search/>,
    className
    }: ButtonProps) => {

    return(
        <button onClick={disabled ? undefined : onClick}
                disabled={disabled}
                className={clsx(buttonStyles({ variant, size, disabled }), className, "flex ") }>
            {children}

            {rightIcon && (
            <span className="ml-1">{rightIcon}</span>
            )}
        </button>
    )
}
import type React from "react"
import { buttonStyles } from "./Button.styles"
import type { VariantProps } from "class-variance-authority"
import clsx from "clsx"

type ButtonProps = {
    children?: React.ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    className?: string,
    icon?: React.ReactNode,
} & VariantProps<typeof buttonStyles>

export const Button =  
    ({children, 
    onClick, 
    disabled = false,
    variant,
    size,
    icon,
    className
    }: ButtonProps) => {

    return(

        <button onClick={disabled ? undefined : onClick}
                disabled={disabled}
                className={clsx(buttonStyles({ variant, size, disabled }), className, "flex items-center") }>
        {children && icon ? (
        //children & icon render
        <>
            {children}
            <div className="ml-2">{icon}</div>
        </>
        
        ) : icon ? (

        //only icon render
        <div className="flex items-center">{icon}</div>
        ) : (

        // children only render
        children
        )}

        </button>

    )
}
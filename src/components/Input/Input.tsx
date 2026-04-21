import type React from "react";
import { inputStyles } from "./Input.styles";
import type { VariantProps } from "class-variance-authority";
import clsx from "clsx";

type inputProps = {
    children?: React.ReactNode,
    className?: string
} & VariantProps<typeof inputStyles>

export const Input = ({ children, variant, className } : inputProps)  => {

    return (
        <input
        children = {children}
        className={clsx(inputStyles({ variant }), className)}
        > 
        
        </input>
    )
}
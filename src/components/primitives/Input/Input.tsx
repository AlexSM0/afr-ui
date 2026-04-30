import type { InputProps } from "./Input.interface";
import { inputStyles } from "./Input.styles";
import clsx from "clsx";
import { useId } from "react";
import { stateIconMap, typeIconMap } from "@/icons/inputIconMap";
import { variantTokens } from "@/tokens/input/variants"
import { stateTokens } from "@/tokens/input/states";

export const Input = ({
    type, 
    variant,
    helperText,
    leftIcon,
    rightIcon,
    inputSize,
    state, 
    className,
    id,
    label,
    ...props } 
    : InputProps)  => {

    const defaultRightIcon = state ? stateIconMap[state] : typeIconMap[type ?? "text"];
    const finalRightIcon = rightIcon ?? defaultRightIcon

    const generatedId = useId()
    const inputId = id ?? generatedId
    const helperId = `${inputId}-helper`

    const variantStyle = variantTokens[variant ?? "primary"]
    const stateStyle = state ? stateTokens[state] : stateTokens["default"]
    
    return (
        <div className="inline-flex flex-col gap-1 w-fit">

            {/* LABEL */}
            {label && (
                <label htmlFor={inputId} className={`${variantStyle.label} text-sm font-medium`}>
                    {label}
                </label>
                )
            }

            {/*Input wrapper*/}
            <div className="relative inline-block">
                {/* optional icon */}
                {leftIcon && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        {leftIcon}
                    </span>
                )}
                
                <input
                id={inputId}
                aria-describedby={helperText ? helperId : undefined}
                {...props}
                type={type}
                className={clsx(inputStyles({ state, variant, inputSize }), 
                className, 
                leftIcon && "pl-10",
                finalRightIcon && "pr-10")}
                />

                {/* optional icon */}
                {finalRightIcon && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    {finalRightIcon}
                </span>
                )}

            </div>

           { helperText && 
           <span id={helperId} className={`${stateStyle?.helper} text-xs`}>{helperText}</span> }
        </div>
    )
}
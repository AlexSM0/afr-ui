import type { InputProps } from "./Input.interface";
import { inputStyles } from "./Input.styles";
import clsx from "clsx";
import { useId } from "react";
import { stateIconMap, typeIconMap } from "./utils/inputIconMap";
import { variantTokens } from "./tokens/inputTokens"
import { stateTokens } from "./tokens/inputTokens";

export const Input = ({ 
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

    const defaultRightIcon = state ? stateIconMap[state] : typeIconMap[props.type ?? "text"];
    const finalRightIcon = rightIcon ?? defaultRightIcon

    const generatedId = useId()
    const inputId = id ?? generatedId
    const helperId = `${inputId}-helper`

    const variantStyle = variantTokens[variant ?? "primary"]
    const stateStyle = state ? stateTokens[state] : stateTokens["default"]
    
    return (
        <div className="relative flex flex-col gap-1">

            {/* LABEL */}
            {label && (
                <label htmlFor={inputId} className={`${variantStyle.label} text-sm font-medium`}>
                    {label}
                </label>
                )
            }

            {/*Input wrapper*/}
            <div className="relative flex items-center">
                {/* optional icon */}
                {leftIcon && (
                    <div className="absolute left-3 flex items-center ">
                        {leftIcon}
                    </div>
                )}
                
                <input
                id={inputId}
                aria-describedby={helperText ? helperId : undefined}
                {...props}
                className={clsx(inputStyles({ state, variant, inputSize }), 
                className, 
                leftIcon && "pl-10",
                finalRightIcon && "pr-10")}
                />

                {/* optional icon */}
                {finalRightIcon && (
                <div className="absolute right-3 flex items-center ">
                    {finalRightIcon}
                </div>
                )}

            </div>

           { helperText && 
           <span id={helperId} className={`${stateStyle?.helper} text-xs`}>{helperText}</span> }
        </div>
    )
}
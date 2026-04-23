import type { InputProps } from "./Input.interface";
import { inputStyles } from "./Input.styles";
import clsx from "clsx";
import { useId } from "react";
import { iconMap } from "./utils/inputIconMap";
import { variantTokens } from "./tokens/input"
import { stateTokens } from "./tokens/input";

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

    const defaultRightIcon = state ? iconMap[state] : iconMap[props.type ?? "text"];
    const finalRightIcon = rightIcon ?? defaultRightIcon

    const generatedId = useId()
    const inputId = id ?? generatedId
    const helperId = `${inputId}-helper`

    const styles = state ? stateTokens[state] : variantTokens[variant ?? "primary"]

    return (
        <div className="relative flex flex-col gap-1">

            {/* LABEL */}
            {label && (
                <label htmlFor={inputId} className={`${styles.label} text-sm font-medium`}>
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
           <span id={helperId} className={`${styles.helper} text-xs`}>{helperText}</span> }
        </div>
    )
}
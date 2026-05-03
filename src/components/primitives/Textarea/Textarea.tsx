import type { TextareaProps } from "./Textarea.interface";
import clsx from "clsx";
import { TextareaStyles } from "./Textarea.styles";
import { useId } from "react";
import { stateTokens } from "@/tokens/input/states";
import { variantTokens } from "@/tokens/input/variants";
import { resizeMap } from "@/tokens/textarea/resize";

export const Textarea = ({
    label,
    variant,
    helperText,
    state,
    size,
    className,
    resize,
    id,
    ...props } 
    : TextareaProps) => {

        const generatedId = useId()
        const textAreaId = id ?? generatedId

        const helperId = `${textAreaId}-helper`
        
        const variantStyle = variantTokens[variant ?? "primary"]
        const stateStyle = state ? stateTokens[state] : stateTokens["default"]
        
        const resizeType = resizeMap[resize ?? "none"]

        return (
            <div className="flex flex-col gap-2 w-fit">

                {label && (
                    <label htmlFor={textAreaId} className={`${variantStyle.label}`} >
                        {label}
                    </label>
                )}

                <textarea
                    className={clsx(
                        TextareaStyles({ state, variant, size }),
                        className,
                        `${resizeType}`
                    )}
                    aria-describedby={helperText ? helperId : undefined}
                    id={textAreaId}
                    {...props}
                />


                {helperText && (
                    <span id={helperId} className={`${stateStyle.helper} text-xs`} >
                        {helperText}
                    </span>
                )}

            </div>

        );
}

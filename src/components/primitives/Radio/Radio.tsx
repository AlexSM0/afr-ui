import type { RadioProps } from "./Radio.interface"
import { stateTokens } from "@/tokens/input/states"
import clsx from "clsx"
import { radioStyles } from "./Radio.styles"
import { useId } from "react"

export const Radio = ({
    id,
    label,
    helperText,
    size,
    invalid,
    className,
    ...props
}: RadioProps)  => {

    const generatedId = useId()
    const inputId = id ?? generatedId
    const helperId = `${inputId}-helper`

    const stateStyle = invalid ? stateTokens["error"] : stateTokens["default"]

    return(
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">

                <input type="radio" 
                    id={inputId}
                    aria-describedby={helperText ? helperId : undefined}
                    className={clsx(radioStyles({size, invalid}),
                    className)}
                    {...props}
                />

                {label && (
                    <label htmlFor={inputId}>{label}</label>
                )}

            </div>
            
            <div className="flex">
                {helperText && (
                    <span id={helperId} className={`${stateStyle.helper} text-sm`} >
                        {helperText}
                    </span>
                )}
            </div>
        </div>
    )

}
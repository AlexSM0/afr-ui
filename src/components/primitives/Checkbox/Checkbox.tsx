import type { CheckboxProps } from "./Checkbox.interface"
import clsx from "clsx"
import { checkboxStyles } from "./Checkbox.style"
import { stateTokens } from "@/tokens/input/states"
import { useId } from "react"

export const Checkbox = ({
    id,
    label,
    helperText,
    state,
    size,
    ...props
}: CheckboxProps) => {

    const generatedId = useId()
    const inputId = id ?? generatedId
    const helperId = `${inputId}-helper`

    const stateStyle = state ? stateTokens[state] : stateTokens["default"]

    return(
        <div className="flex flex-col gap-1">

            <div className="flex gap-2 items-center">

                <input type="checkbox" 
                aria-describedby={helperText ? helperId : undefined}
                className={clsx(checkboxStyles({size, state}))}
                id={inputId}
                {...props}
                />

                {label && (
                    <label htmlFor={inputId}>
                        {label}
                    </label>
                    )
                }
            </div>

            {helperText && (
            <span id={helperId} className={`${stateStyle.helper} text-sm`}>
                {helperText}
            </span>)
            }
        </div>
        
    )
}
import type { InputProps } from "./Input.interface";
import { inputStyles } from "./Input.styles";
import clsx from "clsx";
import { useId } from "react";
import { SearchIcon } from "lucide-react";
import { FileIcon } from "lucide-react";
import { MailIcon } from "lucide-react";
import { RectangleEllipsisIcon } from "lucide-react";

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

    const iconMap = {
        search: <SearchIcon/>,
        password: <RectangleEllipsisIcon/>,
        email: <MailIcon/>,
        file: <FileIcon/>
    }

    const defaultRightIcon = iconMap[props.type as keyof typeof iconMap];
    const finalRightIcon = rightIcon ?? defaultRightIcon

    const generatedId = useId()
    const inputId = id ?? generatedId
    const helperId = `${inputId}-helper`

    return (
        <div className="relative flex flex-col gap-1">

            {/* LABEL */}
            {label && (
                <label htmlFor={inputId} className="text-sm font-medium">
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
                className={clsx(inputStyles({ variant, inputSize, state }), 
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
           <span id={helperId} className="text-xs text-gray-500">{helperText}</span> }
        </div>
    )
}
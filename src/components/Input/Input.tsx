import type { InputProps } from "./Input.interface";
import { inputStyles } from "./Input.styles";
import clsx from "clsx";


export const Input = ({ 
    variant,
    placeholder,
    helperText,
    disabled,
    leftIcon,
    rightIcon,
    onChange,
    inputSize,
    inputType,
    state, 
    className } 
    : InputProps)  => {

    return (
        <div>
            {leftIcon}
            <input
            placeholder = {placeholder}
            disabled = {disabled}
            onChange={onChange}
            className={clsx(inputStyles({ variant, inputSize, inputType, state }), className)}
            /> 
            {rightIcon}
            {helperText}
        </div>
    )
}
import type { TextareaProps } from "./Textarea.interface";

export const Textarea = ({
    
    label,
    helperText,
    state,
    className,
    resize,
    disabled,
    ...props
    } 
    : TextareaProps) => {

    return (
        <Textarea 
            label={label}
            helperText={helperText}
            state={state}
            resize={resize}
            disabled={disabled}
            {...props}
        >

        </Textarea>
    )
}

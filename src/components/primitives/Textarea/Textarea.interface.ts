import type { StateType } from "@/types/input";
import type React from "react";
import { TextareaStyles } from "./Textarea.styles";
import type { VariantProps } from "class-variance-authority";

export interface TextareaProps 
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, 
        VariantProps<typeof TextareaStyles> {
    label?: string,
    helperText?: string,
    state?: StateType,
    className?: string,
    resize?: boolean,
    disabled?: boolean
}  
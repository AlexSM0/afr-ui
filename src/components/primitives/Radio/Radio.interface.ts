import { radioStyles } from "./Radio.styles";
import type { VariantProps } from "class-variance-authority";

export interface RadioProps 
extends VariantProps<typeof radioStyles>,
Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string,
    helperText?: string,
    invalid?: boolean 
}
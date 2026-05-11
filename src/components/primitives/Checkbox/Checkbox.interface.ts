import type { VariantProps } from "class-variance-authority";
import React from "react";
import type { checkboxStyles } from "./Checkbox.style";
import type { StateType } from "@/types/input";

export interface CheckboxProps 
    extends VariantProps<typeof checkboxStyles>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
    label?: string,
    helperText?: string,
    state?: StateType,
}
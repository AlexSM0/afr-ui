import type { VariantProps } from "class-variance-authority";
import { inputStyles } from "./Input.styles";
import type React from "react";

export type InputType = 
"search" | 
"password" | 
"email" | 
"file" | 
"text"

export type StateType = 
"error" |
"success"

export interface InputProps
  extends VariantProps<typeof inputStyles>,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">  {
  type?: InputType,
  state?: StateType,
  className?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  helperText?: string,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  label?: string
}
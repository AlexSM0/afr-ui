import type { VariantProps } from "class-variance-authority";
import { inputStyles } from "./Input.styles";
import type React from "react";

export interface InputProps
  extends VariantProps<typeof inputStyles>,
    React.InputHTMLAttributes<HTMLInputElement> {
  className?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  placeholder?: string,
  helperText?: string,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode
}
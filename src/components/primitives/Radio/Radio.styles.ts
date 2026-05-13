import { cva } from "class-variance-authority";

export const radioStyles = cva(
  `
  shrink-0
  cursor-pointer
  transition
  border
  border-gray-300
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-offset-2
  disabled:opacity-60
  disabled:cursor-not-allowed
  `,
  {
    variants: {
      size: {
        sm: "w-3 h-3",
        md: "w-4 h-4",
        lg: "w-5 h-5"
      },

      invalid: {
        true: "accent-red-600",
        false: ""
      },
    },

    defaultVariants: {
      size: "md",
      invalid: false,
    },
  }
);
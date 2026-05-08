import { cva } from "class-variance-authority";

export const TextareaStyles = cva(
  `p-2 placeholder-gray-400 bg-gray-200/95 rounded-md focus:outline-none focus:ring-2 shadow transition`,
  {
    variants: {
      variant: {
        primary: "border border-gray-300 focus:ring-sky-400",
        secondary: "border border-gray-400 focus:ring-black",
        danger: "border border-gray-300 focus:ring-red-700",
        ghost: "bg-transparent border border-gray-200 focus:ring-gray-400",
      },

      state: {
        default: "",
        error: "",
        success: "",
      },

      size: {
        sm: "w-48",
        md: "w-64",
        lg: "w-80",
      },
    },

    compoundVariants: [
      {
        state: "error",
        class: "border-red-500 bg-red-100 focus:ring-red-500",
      },
      {
        state: "success",
        class: "border-green-500 bg-green-100 focus:ring-green-500",
      },
    ],

    defaultVariants: {
      variant: "primary",
      state: "default",
      size: "md",
    },
  }
);
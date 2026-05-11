import { cva } from "class-variance-authority";

export const checkboxStyles = cva(
  `
  cursor-pointer
  transition
  border
  border-gray-300
  rounded-sm
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
        lg: "w-5 h-5",
      },

      state: {
        default: "",
        error: "",
        success: "",
      },
    },

    compoundVariants: [
      {
        state: "default",
        className: `
          accent-sky-600
          focus-visible:ring-sky-600
          hover:border-sky-600
        `,
      },

      {
        state: "error",
        className: `
          accent-red-600
          focus-visible:ring-red-600
          hover:border-red-600
          border-red-600
        `,
      },

      {
        state: "success",
        className: `
          accent-green-600
          focus-visible:ring-green-600
          hover:border-green-600
          border-green-600
        `,
      },
    ],

    defaultVariants: {
      size: "md",
      state: "default",
    },
  }
);
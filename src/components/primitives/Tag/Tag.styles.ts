import { cva } from "class-variance-authority"

export const TagStyles = cva(
    `font-bold p-2` //base
    ,{
        variants: {
            variant: {
                primary: "text-sky-400",
                secondary: "text-mist-100",
                danger: "text-red-500",
                ghost: "text-gray-400"
            },
            size: {
                sm: "text-xs px-2 py-1",
                md: "text-sm px-2.5 py-1",
                lg: "text-base px-3 py1.5"
            }
        },

        defaultVariants: {
            variant: "primary",
            size: "sm"
        }
    }
)
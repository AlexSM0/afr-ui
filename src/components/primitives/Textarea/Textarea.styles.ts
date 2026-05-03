import { cva } from "class-variance-authority";

export const TextareaStyles = cva(
    `p-2 placeholder-gray-400 bg-gray-200/95 
    rounded-md focus:outline-none focus:ring-2
    shadow transition`
    ,{
        variants: {

            variant: {
                primary: " focus:ring-sky-400 ",
                secondary: "focus:ring-black",
                danger: "focus:ring-red-700",
                ghost: "bg-transparent focus:ring-gray-400"
            },
            
            state: {
                error: "bg-red-200",
                success: "bg-green-200"
            },

            size: {
                sm: "w-48",
                md: "w-64",
                lg: "w-80"
            },

        },

        defaultVariants: {
            variant: "primary",
            size: "md",
        }

    },

);
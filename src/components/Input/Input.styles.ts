import { cva } from "class-variance-authority"

export const inputStyles = cva(
    `bg-amber-50 
    rounded-sm` //base
    ,{
        variants: {

            variant: {
                primary: "",
                secondary: "",
                danger: "",
                ghost: ""
            },

            inputSize: {
                sm: "",
                md: "",
                lg: ""
            },

            state: {
                error: "",
                success: "",
            }
        },

        defaultVariants: {
            variant: "primary",
            inputSize: "md"
        }
    }
)

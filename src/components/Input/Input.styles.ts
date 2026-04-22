import { cva } from "class-variance-authority"

export const inputStyles = cva(
    `bg-amber-50 
    rounded-sm
    border border-purple-50 
    focus:border-sky-400` //base
    ,{
        variants: {

            variant: {
                primary: "",
                secondary: "",
                danger: "",
                ghost: "opacity-20"
            },

            inputSize: {
                sm: "p-2",
                md: "p-4",
                lg: "p-5"
            },

            inputType: {
                text: "",
                password: "",
                email: "",
                user: "",
                search: ""
            },

            state: {
                error: "",
                success: "",
                disabled: ""
            }
        },

        defaultVariants: {
            variant: "primary",
            inputSize: "md",
            inputType: "text"
        }
    }
)

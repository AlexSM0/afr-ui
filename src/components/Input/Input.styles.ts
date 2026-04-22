import { cva } from "class-variance-authority"

export const inputStyles = cva(
    `font-bold` //base
    ,{
        variants: {

            variant: {
                primary: "",
                secondary: "",
                danger: "",
                ghost: "opacity-20"
            },

            size: {
                
            }
        }
    }
)

import { cva } from "class-variance-authority";

export const TextareaStyles = cva(
    `py-1`
    ,{
        variants: {

            variant: {
                primary: "",
                secondary: "",
                danger: "",
                ghost: ""
            },
            
        },


    },

);
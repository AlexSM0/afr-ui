import { cva } from "class-variance-authority"

export const inputStyles = cva(
    `leading-tight
    py-2
    px-2.5
    bg-gray-200/95
    focus:outline-none
    rounded-sm
    rounded-b-none
    shadow
    placeholder-gray-400
    border-b-2
    focus:bg-transparent 
    focus:border-b-2 
    focus:placeholder-transparent 
    focus:shadow-none 
    focus:rounded-none 
    transition
    ` //base
    ,{
        variants: {

            variant: {
                primary: "border-b-transparent hover:border-b-sky-400 focus:border-b-sky-400 ",
                secondary: "border-b-transparent hover:border-b-black focus:border-b-black ",
                danger: "border-b-transparent hover:border-b-red-700 focus:border-b-red-700 ",
                ghost: "bg-transparent border-b-2 border-b-gray-400 shadow-none"
            },

            inputSize: {
                sm: "text-sm",
                md: "text-md",
                lg: "text-lg"
            },

            state: {
                error: "bg-red-200",
                success: "bg-green-200",
            },
            
        },

        defaultVariants: {
            inputSize: "md"
        },

        compoundVariants: [

        ]        
    }
)

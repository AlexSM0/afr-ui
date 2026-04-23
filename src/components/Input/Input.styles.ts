import { cva } from "class-variance-authority"

export const inputStyles = cva(
    `py-2
    px-2.5
    focus:outline-none
    rounded-sm
    rounded-b-none
    shadow
    placeholder-gray-400
    focus:bg-transparent 
    focus:border-b-3 
    focus:placeholder-transparent 
    focus:shadow-none 
    focus:rounded-none 
    transition
    ` //base
    ,{
        variants: {

            variant: {
                primary: "bg-gray-200/95 border-b-2 border-b-sky-400 ",
                secondary: "bg-gray-200/95 border-b-2 border-b-black ",
                danger: "bg-gray-200/95 border-b-2 border-b-red-700",
                ghost: "bg-transparent border-b-2 border-b-gray-400 shadow-none"
            },

            inputSize: {
                sm: "text-sm",
                md: "text-md",
                lg: "text-lg"
            },

            state: {
                error: "border-b-red-500!",
                success: "border-b-green-400!",
            },
            
        },

        defaultVariants: {
            inputSize: "md"
        },

        compoundVariants: [

        ]        
    }
)

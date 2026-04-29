import { cva } from "class-variance-authority"

export const buttonStyles = cva(
    `shadow-2xs border border-black rounded-2xl 
    transition duration-200 active:scale-95
    focus:ring-2 focus:outline-none select-none
    flex items-center justify-center` // base
    ,{
        variants: {
            variant: {
                primary: "bg-sky-400  hover:bg-sky-300 ",
                secondary: "bg-mist-100 hover:bg-mist-200 ",
                danger: "bg-red-500 hover:bg-red-400 ",
                ghost: "bg-transparent hover:bg-gray-100"                   
            },

            size: {
                sm: "px-3 py-1 text-sm",
                md: "px-4 py-2",
                lg: "px-6 py-3 text-lg"                    
            },

            disabled: {
                true: "opacity-40 cursor-not-allowed",
                false: "cursor-pointer"
            },
            
        },

        defaultVariants: {
            variant: "primary",
            size: "md",   
            disabled: false,            
        }
    }     
)
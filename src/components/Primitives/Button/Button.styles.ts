import { cva } from "class-variance-authority"

export const buttonStyles = cva(
    `rounded-xl 
    transition duration-200 active:scale-85
    focus:ring-1 focus:outline-none select-none
    flex items-center justify-center bg-linear-180
    hover:opacity-90` // base
    ,{
        variants: {
            variant: {
                primary: "shadow-black shadow-xs bg-linear-to-t from-sky-600 via-sky-500 to-sky-400  ",
                secondary: "shadow-black shadow-xs bg-linear-to-t from-neutral-700 via-neutral-600 to-neutral-500 text-white",
                danger: "shadow-black shadow-xs bg-linear-to-t from-rose-700 via-rose-500 to-rose-400 font-bold ",
                ghost: "shadow-gray-100 shadow-xs border-2 border-gray-100 bg-transparent hover:bg-gray-10 text-gray-400"                   
            },

            size: {
                sm: "px-3 py-1 text-sm",
                md: "px-7 py-2",
                lg: "px-8 py-2.5 text-lg"                    
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
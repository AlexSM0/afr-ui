export type StateType = 
"error" | "success" | "default"

export interface SelectOptions {
    label: string,
    value: string,
    disabled?: boolean
}
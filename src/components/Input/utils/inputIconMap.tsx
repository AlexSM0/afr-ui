import type { ReactNode } from "react"
import type { InputType, StateType } from "../Input.interface"

import {
  SearchIcon,
  FileIcon,
  MailIcon,
  RectangleEllipsisIcon,
  BadgeAlertIcon,
  CheckIcon
} from "lucide-react"

export const typeIconMap: Record<InputType, ReactNode> = {
  search: <SearchIcon/>,
  password: <RectangleEllipsisIcon/>,
  email: <MailIcon/>,
  file: <FileIcon/>,
  text: null
}

export const stateIconMap: Record<StateType, ReactNode> = {
  error: <BadgeAlertIcon color="#fb2c36"/>,
  success: <CheckIcon color="#05df72"/>
}
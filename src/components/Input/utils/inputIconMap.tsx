import type { ReactNode } from "react"
import {
  SearchIcon,
  FileIcon,
  MailIcon,
  RectangleEllipsisIcon,
  BadgeAlertIcon,
  CheckIcon
} from "lucide-react"


export const iconMap: Record<string, ReactNode> = {
  search: <SearchIcon/>,
  password: <RectangleEllipsisIcon/>,
  email: <MailIcon/>,
  file: <FileIcon/>,
  error: <BadgeAlertIcon color="#fb2c36"/>,
  success: <CheckIcon color="#05df72"/>
}
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Input } from "./Input"
import { SearchIcon } from "lucide-react"

const meta: Meta<typeof Input> = {
  title: "Primitives/Input",
  component: Input,

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "ghost"],
    },
    inputSize: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    state: {
      control: "select",
      options: ["error", "success", null],
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "file"],
    },
    
  },

  args: {
    placeholder: "Type something...",
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
  },
}

export const WithHelper: Story = {
  args: {
    label: "Email",
    helperText: "We’ll never share your email",
  },
}

export const Error: Story = {
  args: {
    label: "Email",
    state: "error",
    helperText: "Invalid email address",
  },
}

export const Success: Story = {
  args: {
    label: "Email",
    state: "success",
    helperText: "Looks good!",
  },
}

export const WithIcons: Story = {
  args: {
    type: "search",
    leftIcon: <SearchIcon />,
    placeholder: "Search...",
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Secondary",
    helperText: "Helper text"    
  },
}

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Danger",
    helperText: "Helper text"
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "Ghost",
    helperText: "Helper text"
  },
}
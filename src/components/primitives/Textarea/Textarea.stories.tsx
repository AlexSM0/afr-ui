import type { Meta, StoryObj } from "@storybook/react-vite"
import { Textarea } from "./Textarea"

const meta: Meta<typeof Textarea> = {
  title: "Primitives/Textarea",
  component: Textarea,

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "ghost"],
    },
    state: {
      control: "select",
      options: ["error", "success", "default"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"]
    }
    
  },

  args: {
    placeholder: "Type something...",
  },
  
}

export default meta

type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: {
  },
}

export const Primary: Story = {
  args: {
    variant: "primary",
    label: "Lore Ipsum",
    helperText: "Lore Ipsum"
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: "Lore Ipsum",
    helperText: "Lore Ipsum"
  },
}

export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Lore Ipsum",
    helperText: "Lore Ipsum"
  
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    label: "Lore Ipsum",
    helperText: "Lore Ipsum"
  },
}

export const Success: Story = {
  args: {
    state: "success",
    label: "Lore Ipsum",
    helperText: "Lore Ipsum"
  },
}

export const Error: Story = {
  args: {
    state: "error",
    label: "Lore Ipsum",
    helperText: "Lore Ipsum"
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    label: "Lore Ipsum",
    helperText: "Lore Ipsum"
  },
}

export const Medium: Story = {
  args: {
    size: "md",
    label: "Lore Ipsum",
    helperText: "Lore Ipsum"
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    label: "Lore Ipsum",
    helperText: "Lore Ipsum"
  },
}

export const WithResize: Story = {
  args: {
    resize: "both"
  },
}

export const WithVerticalResize: Story = {
  args: {
    resize: "vertical"
  },
}
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./Button"
import { Search } from "lucide-react"

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,

  tags: ["autodocs"],

  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: "Lore Ipsum"
  },
}

export const Small: Story = {
  args: {
    children: "Lore Ipsum",
    size: "sm"
  },
}

export const Medium: Story = {
  args: {
    children: "Lore Ipsum",
    size: "md"
  },
}

export const Large: Story = {
  args: {
    children: "Lore Ipsum",
    size: "lg"
  },
}

export const Primary: Story = {
  args: {
    children: "Lore Ipsum",
    variant: "primary"
  },
}

export const Secondary: Story = {
  args: {
    children: "Lore Ipsum",
    variant: "secondary"
  },
}

export const Danger: Story = {
  args: {
    children: "Lore Ipsum",
    variant: "danger"
  },
}

export const Ghost: Story = {
  args: {
    children: "Lore Ipsum",
    variant: "ghost"
  },
}

export const Disabled: Story = {
  args: {
    children: "Lore Ipsum",
    disabled: true,
  },
}

export const WithIcon: Story = {
  args: {
    children: "Lore Ipsum",
    icon: <Search/>
  },
}

export const IconOnly: Story = {
  args: {
    icon: <Search/>
  },
}

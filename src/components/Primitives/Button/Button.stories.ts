import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./Button"

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
  },
}

export const Small: Story = {
  args: {
    size: "sm"
  },
}

export const Medium: Story = {
  args: {
    size: "md"
  },
}

export const Large: Story = {
  args: {
    size: "lg"
  },
}

export const Primary: Story = {
  args: {
    variant: "primary"
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary"
  },
}

export const Danger: Story = {
  args: {
    variant: "danger"
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost"
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
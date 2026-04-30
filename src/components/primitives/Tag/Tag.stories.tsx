import type { Meta, StoryObj } from "@storybook/react-vite"
import { Tag } from "./Tag"


const meta: Meta<typeof Tag> = {
  title: "Primitives/Tag",
  component: Tag,

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

type Story = StoryObj<typeof Tag>

export const Default: Story = {
  args: {
    children: "Lore Ipsum"
  },
}

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Lore Ipsum"
  },
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Lore Ipsum"
  },
}

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Lore Ipsum"
  },
}

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Lore Ipsum"
  },
}

export const Small: Story = {
  args: {
    variant: "primary",
    children: "Lore Ipsum",
    size: "sm"
  },
}

export const Medium: Story = {
  args: {
    variant: "primary",
    children: "Lore Ipsum",
    size: "md"
  },
}

export const Large: Story = {
  args: {
    variant: "primary",
    children: "Lore Ipsum",
    size: "lg"
  },
}


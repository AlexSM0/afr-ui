import type { Meta, StoryObj } from "@storybook/react-vite"
import { Checkbox } from "./Checkbox"


const meta: Meta<typeof Checkbox> = {
  title: "Primitives/Checkbox",
  component: Checkbox,

  tags: ["autodocs"],

  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    state: {
      control: "select",
      options: ["error", "success", "default"],
    },
    
  },

}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
  },
}

export const WithLabel: Story = {
  args: {
    label: "Lore Ipsum",
    checked: true
  },
}

export const WithHelperText: Story = {
  args: {
    label: "Lore Ipsum",
    helperText: "Lore Ipsum",
    checked: true
  },
}

export const Success: Story = {
  args: {
    label: "Lore Ipsum",
    helperText: "Lore Ipsum",
    checked: true,
    state: "success"    
  },
}

export const Error: Story = {
  args: {
    label: "Lore Ipsum",
    helperText: "Lore Ipsum",
    checked: true,
    state: "error"    
  },
}

export const Small: Story = {
  args: {
    label: "Lore Ipsum",
    helperText: "Lore Ipsum",
    checked: true,
    size: "sm"
  },
}

export const Medium: Story = {
  args: {
    label: "Lore Ipsum",
    helperText: "Lore Ipsum",
    checked: true,
    size: "md"
  },
}

export const Large: Story = {
  args: {
    label: "Lore Ipsum",
    helperText: "Lore Ipsum",
    checked: true,
    size: "lg"
  },
}
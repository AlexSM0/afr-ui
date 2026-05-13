import type { Meta, StoryObj } from "@storybook/react-vite"
import { Radio } from "./Radio"


const meta: Meta<typeof Radio> = {
  title: "Primitives/Radio",
  component: Radio,

  tags: ["autodocs"],

  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    invalid: {
      control: "select",
      options: [true, false],
    },
    
  },

}

export default meta

type Story = StoryObj<typeof Radio>

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

export const Invalid: Story = {
  args: {
    label: "Lore Ipsum",
    helperText: "Lore Ipsum",
    checked: true,
    invalid: true    
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

export const Disabled: Story = {
  args: {
    label: "Lore Ipsum",
    helperText: "Lore Ipsum",
    disabled: true
  },
}
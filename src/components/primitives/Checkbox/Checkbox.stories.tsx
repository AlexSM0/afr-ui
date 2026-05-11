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
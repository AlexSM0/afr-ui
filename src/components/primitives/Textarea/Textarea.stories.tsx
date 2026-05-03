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
      options: ["error", "success", null],
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
    label: "Label",
    helperText: "Helper Text",
    placeholder: "Placeholder...",
    resize: "none"
  },
}
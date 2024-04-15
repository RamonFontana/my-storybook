import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'


export default {
  title: 'Surfaces/Box',
  tags: ['autodocs'],
  component: Box,
  args: {
    children: <Text>Exemplo do elemento Box</Text>
  },
  argTypes: {
    children: {
      control: false
    }
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
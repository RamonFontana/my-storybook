import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ramon-ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  tags: ['autodocs'],
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}>
          {Story()}
          <Text size="sm">Accept Terms of Use</Text>
        </Box>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}

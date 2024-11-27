import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/app/components/button';

// Meta configuration for the Button component
const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['default', 'green', 'dark'],
    },
    style: {
      control: { type: 'select' },
      options: ['solid', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
  parameters: {
    // Add accessibility checks
    a11y: {
      disable: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

// Types for stories
type Story = StoryObj<typeof Button>;

// Default Button Story
export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

// Variant Stories
export const GreenSolid: Story = {
  args: {
    color: 'green',
    buttonStyle: 'solid',
    children: 'Green Solid',
  },
};

export const GreenOutline: Story = {
  args: {
    color: 'green',
    buttonStyle: 'outline',
    children: 'Green Outline',
  },
};

export const DarkSolid: Story = {
  args: {
    color: 'dark',
    buttonStyle: 'solid',
    children: 'Dark Solid',
  },
};

export const DarkOutline: Story = {
  args: {
    color: 'dark',
    buttonStyle: 'outline',
    children: 'Dark Outline',
  },
};

// Size Variants
export const SmallButton: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
  },
};

export const LargeButton: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

// Disabled State
export const DisabledButton: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

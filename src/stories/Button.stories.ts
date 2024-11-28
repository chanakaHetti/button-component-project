import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '@/app/components/button';

// Meta configuration for the Button component
const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['green', 'dark'],
    },
    buttonStyle: {
      control: { type: 'select' },
      options: ['solid', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    fullWidth: { type: 'boolean' },
    onActionClick: { action: 'clicked' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A customizable button component with different styles, colors, and sizes.',
      },
    },
    // Add accessibility checks
    a11y: {
      disable: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

// Types for stories
type Story = StoryObj<typeof Button>;

// Variant Stories
export const GreenSolid: Story = {
  args: {
    color: 'green',
    buttonStyle: 'solid',
    children: 'Green Solid',
    onActionClick: action('Button clicked: Green Solid'),
  },
};

export const GreenOutline: Story = {
  args: {
    color: 'green',
    buttonStyle: 'outline',
    children: 'Green Outline',
    onActionClick: action('Button clicked: Green Outline'),
  },
};

export const GreenDisabled: Story = {
  args: {
    disabled: true,
    color: 'green',
    children: 'Green Disabled',
  },
};

export const GreenFullWidth: Story = {
  args: {
    color: 'green',
    children: 'Green Full Width',
    fullWidth: true,
    onActionClick: action('Button clicked: Green Full Width'),
  },
};

export const DarkSolid: Story = {
  args: {
    color: 'dark',
    buttonStyle: 'solid',
    children: 'Dark Solid',
    onActionClick: action('Button clicked: Dark Solid'),
  },
};

export const DarkOutline: Story = {
  args: {
    color: 'dark',
    buttonStyle: 'outline',
    children: 'Dark Outline',
    onActionClick: action('Button clicked: Dark Outline'),
  },
};

export const DarkDisabled: Story = {
  args: {
    disabled: true,
    color: 'dark',
    children: 'Dark Disabled',
  },
};

export const DarkFullWidth: Story = {
  args: {
    color: 'dark',
    children: 'Dark Full Width',
    fullWidth: true,
    onActionClick: action('Button clicked: Dark Full Width'),
  },
};

// Size Variants
export const SmallButton: Story = {
  args: {
    size: 'sm',
    children: 'Small Button',
    onActionClick: action('Button clicked: Small Button'),
  },
};

export const MediumButton: Story = {
  args: {
    size: 'md',
    children: 'Medium Button',
    onActionClick: action('Button clicked: Medium Button'),
  },
};

export const LargeButton: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
    onActionClick: action('Button clicked: Large Button'),
  },
};

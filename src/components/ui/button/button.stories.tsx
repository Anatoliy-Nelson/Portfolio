import { Button } from './button';

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    active: {
      control: { type: 'boolean' },
    },
  },
};

export const Primary = {
 args: {
    variant: 'contained',
    children: 'Button',
  },
};

export const Outlined = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
};

export const Text = {
  args: {
    variant: 'text',
    children: 'Button',
  },
};

export const Active = {
  args: {
    variant: 'contained',
    active: true,
    children: 'Active Button',
  },
};
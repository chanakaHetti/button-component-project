import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from '../../src/app/components/button';
import { ButtonProps } from '../../src/app/types';

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    buttonStyle: 'solid',
    size: 'md',
    children: 'Test Button',
  };

  it('renders with default props', () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-blue-500 text-white hover:bg-blue-600');
  });

  it('renders with green solid variant', () => {
    render(<Button {...defaultProps} color="green" />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('bg-green-600 text-white hover:bg-green-700');
  });

  it('renders with green outline variant', () => {
    render(<Button {...defaultProps} color="green" buttonStyle="outline" />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass(
      'border-green-600 text-green-600 bg-transparent'
    );
  });

  it('applies the correct size styles', () => {
    render(<Button {...defaultProps} size="lg" />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('px-6 py-3 text-base');
  });

  it('renders as full width when `fullWidth` is true', () => {
    render(<Button {...defaultProps} fullWidth />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('w-full');
  });

  it('disables the button when `disabled` is true', () => {
    render(<Button {...defaultProps} disabled />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'disabled:opacity-50 disabled:cursor-not-allowed'
    );
  });

  it('applies custom classes passed via `className`', () => {
    render(<Button {...defaultProps} className="custom-class" />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('custom-class');
  });

  it('fires onClick event when clicked', async () => {
    const onClick = jest.fn();
    render(<Button {...defaultProps} onClick={onClick} />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies `aria-label` properly', () => {
    render(<Button {...defaultProps} aria-label="Custom Label" />);
    const button = screen.getByRole('button', { name: 'Custom Label' });
    expect(button).toBeInTheDocument();
  });

  it('does not focus on the button when `disabled`', () => {
    render(<Button {...defaultProps} disabled />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveAttribute('tabindex', '-1');
  });
});

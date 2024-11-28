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

  it('should renders with green solid variant', () => {
    render(<Button {...defaultProps} color="green" />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('bg-green-700 text-white hover:bg-green-800');
  });

  it('should renders with green outline variant', () => {
    render(<Button {...defaultProps} color="green" buttonStyle="outline" />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass(
      'border-green-700 text-green-700 bg-transparent'
    );
  });

  it('should applies the correct size styles', () => {
    render(<Button {...defaultProps} size="lg" />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('px-6 py-3 text-base');
  });

  it('should renders as full width when `fullWidth` is true', () => {
    render(<Button {...defaultProps} fullWidth />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('w-full');
  });

  it('should disables the button when `disabled` is true', () => {
    render(<Button {...defaultProps} disabled />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toBeDisabled();
    expect(button).toHaveClass(
      'disabled:opacity-50 disabled:cursor-not-allowed'
    );
  });

  it('should applies custom classes passed via `className`', () => {
    render(<Button {...defaultProps} className="custom-class" />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveClass('custom-class');
  });

  it('should fires onActionClick event when clicked', async () => {
    const onActionClick = jest.fn();
    render(<Button {...defaultProps} onActionClick={onActionClick} />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    await userEvent.click(button);
    expect(onActionClick).toHaveBeenCalledTimes(1);
  });

  it('should not fire onActionClick or onClick when disabled', async () => {
    const onActionClick = jest.fn();
    render(<Button {...defaultProps} disabled onActionClick={onActionClick} />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    await userEvent.click(button);
    expect(onActionClick).not.toHaveBeenCalled();
  });

  it('should applies `aria-label` properly', () => {
    render(<Button {...defaultProps} aria-label="Custom Label" />);
    const button = screen.getByRole('button', { name: 'Custom Label' });
    expect(button).toBeInTheDocument();
  });

  it('should does not focus on the button when `disabled`', () => {
    render(<Button {...defaultProps} disabled />);
    const button = screen.getByRole('button', { name: 'Test Button' });
    expect(button).toHaveAttribute('tabindex', '-1');
  });

  // Accessability aria-label branch (is else) handle to improve the test report
  it('should use children as `aria-label` if children is a string', () => {
    render(<Button {...defaultProps}>Button Text</Button>);
    const button = screen.getByRole('button', { name: 'Button Text' });
    expect(button).toHaveAttribute('aria-label', 'Button Text');
  });

  it('should set `aria-label` to undefined if children is not a string', () => {
    render(
      <Button {...defaultProps}>
        <span>Button Element</span>
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).not.toHaveAttribute('aria-label');
  });
});

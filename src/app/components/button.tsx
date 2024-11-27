import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { ButtonProps, ButtonSize } from '../types';

// Detailed styling configuration
const buttonStyles = {
  green: {
    solid: {
      base: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-300',
      border: 'border-green-600',
    },
    outline: {
      base: 'border border-green-600 text-green-600 bg-transparent hover:bg-green-50 focus:ring-green-200',
      border: 'border-green-600',
    },
  },
  dark: {
    solid: {
      base: 'bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-300',
      border: 'border-gray-800',
    },
    outline: {
      base: 'border border-gray-800 text-gray-800 bg-transparent hover:bg-gray-100 focus:ring-gray-200',
      border: 'border-gray-800',
    },
  },
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

/**
 * Advanced Button Component
 *
 * Features:
 * - Color variants (green, dark)
 * - Style options (solid, outline)
 * - Multiple sizes
 * - Full width option
 * - Accessibility
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = 'green',
      buttonStyle = 'solid',
      size = 'md',
      fullWidth = false,
      className,
      disabled,
      'aria-label': ariaLabel,
      ...props
    },
    ref
  ) => {
    // Determine the correct style configuration
    const variantConfig = buttonStyles[color][buttonStyle];

    const combinedClassName = twMerge(
      'rounded-md transition-all duration-200 ease-in-out',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      variantConfig.base,
      sizeStyles[size],
      fullWidth && 'w-full',
      className
    );

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={
          ariaLabel || (typeof children === 'string' ? children : undefined)
        }
        role="button"
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

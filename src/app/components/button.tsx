'use client';

import React, { MouseEvent, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { ButtonProps, ButtonSize } from '../types';

// Detailed styling configuration
const buttonStyles = {
  green: {
    solid: {
      base: 'bg-green-700 text-white hover:bg-green-800 focus:ring-green-300',
      border: 'border-green-700',
    },
    outline: {
      base: 'border border-green-700 text-green-700 bg-transparent hover:bg-green-50 focus:ring-green-200',
      border: 'border-green-700',
    },
  },
  dark: {
    solid: {
      base: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-300',
      border: 'border-gray-900',
    },
    outline: {
      base: 'border border-gray-900 text-gray-900 bg-transparent hover:bg-gray-100 focus:ring-gray-200',
      border: 'border-gray-900',
    },
  },
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

/**
 * A customizable button component with different styles, colors, and sizes.
 *
 * @param {string} color - The color of the button ('green', 'dark')
 * @param {string} [buttonStyle] - The button style ('solid', 'outline')
 * @param {string} size - The size of the button ('sm', 'md', 'lg')
 * @param {boolean} disabled - Whether the button is disabled
 * @param {boolean} fullWidth - Whether the button should take the full width
 * @param {Function} onActionClick - Custom click handler for button actions
 */
const Button = ({
  children,
  color = 'green',
  buttonStyle = 'solid',
  size = 'md',
  fullWidth = false,
  className,
  disabled,
  onActionClick,
  ref,
  'aria-label': ariaLabel,
  ...props
}: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const resolvedRef = ref || buttonRef;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    if (onActionClick) {
      onActionClick(event);
    }
  };

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
      ref={resolvedRef}
      className={combinedClassName}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={
        ariaLabel || (typeof children === 'string' ? children : undefined)
      }
      role="button"
      tabIndex={disabled ? -1 : 0}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';

export default Button;

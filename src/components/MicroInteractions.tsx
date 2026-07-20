/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

/**
 * Botón con micro-interacciones mejoradas
 */
interface MicroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  ripple?: boolean;
}

export function MicroButton({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'left',
  ripple = true,
  className = '',
  disabled,
  onClick,
  ...props
}: MicroButtonProps) {
  const [rippleElements, setRippleElements] = React.useState<React.ReactNode[]>([]);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!ripple) return;

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const rippleId = Math.random().toString(36).substring(7);
    const ripple = (
      <span
        key={rippleId}
        className="absolute rounded-full bg-white/30 animate-ripple"
        style={{
          width: size,
          height: size,
          left: x,
          top: y
        }}
      />
    );

    setRippleElements(prev => [...prev, ripple]);

    setTimeout(() => {
      setRippleElements(prev => prev.filter(r => r.key !== rippleId));
    }, 600);
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const variants = {
    primary: 'bg-gold hover:bg-gold-hover text-black',
    secondary: 'bg-stone-700 hover:bg-stone-600 text-white',
    ghost: 'bg-transparent hover:bg-white/5 text-stone-300',
    outline: 'border border-gold/50 hover:border-gold text-gold hover:bg-gold/5'
  };

  return (
    <>
      <button
        className={`relative overflow-hidden rounded-sm font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed ${sizes[size]} ${variants[variant]} ${className}`}
        disabled={disabled || loading}
        onClick={(e) => {
          createRipple(e);
          if (onClick) onClick(e);
        }}
        {...props}
      >
        {rippleElements}
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Cargando...</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            {icon && iconPosition === 'left' && icon}
            {children}
            {icon && iconPosition === 'right' && icon}
          </span>
        )}
      </button>

      <style>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }
      `}</style>
    </>
  );
}

/**
 * Input con micro-interacciones
 */
interface MicroInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export function MicroInput({ label, error, icon, className = '', ...props }: MicroInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-stone-400 mb-2">
          {label}
        </label>
      )}

      <div className={`relative flex items-center border rounded-sm transition-all duration-200 ${
        isFocused ? 'border-gold ring-1 ring-gold' : 'border-white/10'
      } ${error ? 'border-red-500' : ''} ${className}`}>
        {icon && (
          <span className="absolute left-3 text-stone-500">
            {icon}
          </span>
        )}

        <input
          className={`w-full bg-transparent text-white placeholder-stone-500 outline-none transition-all ${
            icon ? 'pl-10' : 'pl-4'
          } pr-4 py-3`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {error && (
          <span className="absolute right-3 text-red-500 text-xs">
            {error}
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * Card con efecto hover mejorado
 */
interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function HoverCard({ children, className = '', onClick }: HoverCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <div
      className={`relative bg-[#0a0a0a] border border-white/5 rounded-sm p-4 transition-all duration-300 ${
        isHovered ? 'border-gold/30 shadow-lg shadow-gold/10 -translate-y-1' : 'shadow-sm'
      } ${isPressed ? 'scale-95' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={onClick}
    >
      {children}

      {/* Shine effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shine pointer-events-none" />
      )}
    </div>
  );
}

/**
 * Icon button con tooltip
 */
export function IconButton({
  icon,
  tooltip,
  onClick,
  className = ''
}: {
  icon: React.ReactNode;
  tooltip?: string;
  onClick?: () => void;
  className?: string;
}) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="relative inline-block">
      <button
        className={`p-2 rounded-full hover:bg-white/10 transition-all duration-200 active:scale-95 ${className}`}
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {icon}
      </button>

      {tooltip && showTooltip && (
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-stone-800 text-white text-xs rounded-sm whitespace-nowrap z-10">
          {tooltip}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-800" />
        </div>
      )}
    </div>
  );
}

/**
 * Chip/tag interactivo
 */
interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
}

export function Chip({ label, selected = false, onClick, onDelete }: ChipProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
        selected
          ? 'bg-gold text-black'
          : 'bg-white/5 text-stone-400 hover:bg-white/10'
      } ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <span>{label}</span>
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="hover:text-white/70 transition-colors"
        >
          ×
        </button>
      )}
    </div>
  );
}

/**
 * Progress bar animada
 */
interface ProgressBarProps {
  value: number;
  max?: number;
  showLabel?: boolean;
  color?: string;
}

export function ProgressBar({ value, max = 100, showLabel = false, color = 'bg-gold' }: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-sm mb-1">
          <span className="text-stone-400">Progreso</span>
          <span className="text-white font-mono">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="h-2 bg-stone-800 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-500 ease-out rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

/**
 * Toggle switch animado
 */
interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export function Toggle({ checked, onChange, label, disabled = false }: ToggleProps) {
  return (
    <label className={`flex items-center gap-3 cursor-pointer ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => !disabled && onChange(e.target.checked)}
        />
        <div className={`w-12 h-6 rounded-full transition-all duration-300 ${
          checked ? 'bg-gold' : 'bg-stone-700'
        }`}>
          <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-all duration-300 shadow-md ${
            checked ? 'translate-x-6' : ''
          }`} />
        </div>
      </div>
      {label && <span className="text-sm text-stone-400">{label}</span>}
    </label>
  );
}

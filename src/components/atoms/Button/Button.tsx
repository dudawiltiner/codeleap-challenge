import { cn } from "@/lib/utils/cn"
import type { ButtonProps } from "./Button.types"

export function Button({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded font-bold text-sm transition-opacity"

  const variantStyles = {
    primary: "bg-[#7695ec] text-white hover:opacity-90",
    secondary: "bg-white text-black border border-[#999999] hover:bg-gray-50",
    danger: "bg-[#ff5151] text-white hover:opacity-90",
    success: "bg-[#47b960] text-white hover:opacity-90",
  }

  const widthStyles = fullWidth ? "w-full" : ""
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : ""

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], widthStyles, disabledStyles, className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

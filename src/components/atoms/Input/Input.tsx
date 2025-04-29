import { cn } from "@/lib/utils/cn"
import type { InputProps } from "./Input.types"

export function Input({ fullWidth = true, className, ...props }: InputProps) {
  return (
    <input
      className={cn("border border-[#cccccc] rounded-md px-3 py-2 text-sm", fullWidth && "w-full", className)}
      {...props}
    />
  )
}

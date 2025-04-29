import { cn } from "@/lib/utils/cn"
import type { LabelProps } from "./Label.types"

export function Label({ children, className, ...props }: LabelProps) {
  return (
    <label className={cn("block text-sm font-medium mb-1", className)} {...props}>
      {children}
    </label>
  )
}

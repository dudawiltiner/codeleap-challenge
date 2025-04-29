import { cn } from "@/lib/utils/cn"
import type { TextareaProps } from "./Textarea.types"

export function Textarea({ fullWidth = true, className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "border border-[#cccccc] rounded-md px-3 py-2 text-sm min-h-[120px] resize-none font-mono",
        fullWidth && "w-full",
        className,
      )}
      {...props}
    />
  )
}

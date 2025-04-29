import { Label } from "@/components/atoms/Label/Label"
import type { FormFieldProps } from "./FormField.types"

export function FormField({ label, htmlFor, children }: FormFieldProps) {
  return (
    <div className="mb-4">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  )
}

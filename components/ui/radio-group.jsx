import { Circle } from "lucide-react"

const RadioGroup = ({ className, ...props }) => (
  <div className={`grid gap-2 ${className || ""}`} {...props} />
)

const RadioGroupItem = ({ className, ...props }) => (
  <div
    className={`aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className || ""}`}
    {...props}
  >
    <div className="flex items-center justify-center">
      <Circle className="h-2.5 w-2.5 fill-current text-current" />
    </div>
  </div>
)

export { RadioGroup, RadioGroupItem }
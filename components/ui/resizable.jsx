import { GripVertical } from "lucide-react"

const ResizablePanelGroup = ({ className, ...props }) => (
  <div className={`flex h-full w-full flex-col ${className || ""}`} {...props} />
)

const ResizablePanel = ({ className, ...props }) => (
  <div className={className} {...props} />
)

const ResizableHandle = ({ withHandle, className, ...props }) => (
  <div className={`relative flex w-px items-center justify-center bg-border ${className || ""}`} {...props}>
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </div>
)

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }
const ScrollBar = ({ orientation = "vertical", className, ...props }) => (
  <div
    className={`flex touch-none select-none transition-colors ${
      orientation === "vertical"
        ? "h-full w-2.5 border-l border-l-transparent p-[1px]"
        : "h-2.5 flex-col border-t border-t-transparent p-[1px]"
    } ${className || ""}`}
    {...props}
  >
    <div className="relative flex-1 rounded-full bg-border" />
  </div>
)

const ScrollArea = ({ className, children, ...props }) => (
  <div className={`relative overflow-hidden ${className || ""}`} {...props}>
    <div className="h-full w-full rounded-[inherit]">{children}</div>
    <ScrollBar />
    <div />
  </div>
)

export { ScrollArea, ScrollBar }
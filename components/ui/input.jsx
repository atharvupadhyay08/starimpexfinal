import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef((props, ref) => {
  const { className, type, ...rest } = props;

  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file-0 file-transparent file-sm file-medium file-foreground placeholder-muted-foreground focus-visible-none focus-visible-2 focus-visible-ring focus-visible-offset-2 disabled-not-allowed disabled-50 md-sm",
        className
      )}
      ref={ref}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export { Input };

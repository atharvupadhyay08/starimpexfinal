"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef((props, ref) => {
  const { className, ...rest } = props

  return (
    <ToastPrimitives.Viewport
      ref={ref}
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm-0 sm-0 sm-auto sm-col md-w-[420px]",
        className
      )}
      {...rest}
    />
  )
})
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]-x-0 data-[swipe=end]-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]-none data-[state=open]-in data-[state=closed]-out data-[swipe=end]-out data-[state=closed]-out-80 data-[state=closed]-out-to-right-full data-[state=open]-in-from-top-full data-[state=open]-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef((props, ref) => {
  const { className, variant, ...rest } = props

  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...rest}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef((props, ref) => {
  const { className, ...rest } = props

  return (
    <ToastPrimitives.Action
      ref={ref}
      className={cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover-secondary focus-none focus-2 focus-ring focus-offset-2 disabled-events-none disabled-50 group-[.destructive]-muted/40 group-[.destructive]-destructive/30 group-[.destructive]-destructive group-[.destructive]-destructive-foreground group-[.destructive]-destructive",
        className
      )}
      {...rest}
    />
  )
})
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef((props, ref) => {
  const { className, ...rest } = props

  return (
    <ToastPrimitives.Close
      ref={ref}
      className={cn(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover-foreground focus-100 focus-none focus-2 group-hover-100 group-[.destructive]-red-300 group-[.destructive]-red-50 group-[.destructive]-red-400 group-[.destructive]-offset-red-600",
        className
      )}
      toast-close=""
      {...rest}
    >
      <X className="h-4 w-4" />
    </ToastPrimitives.Close>
  )
})
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef((props, ref) => {
  const { className, ...rest } = props

  return (
    <ToastPrimitives.Title
      ref={ref}
      className={cn("text-sm font-semibold", className)}
      {...rest}
    />
  )
})
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef((props, ref) => {
  const { className, ...rest } = props

  return (
    <ToastPrimitives.Description
      ref={ref}
      className={cn("text-sm opacity-90", className)}
      {...rest}
    />
  )
})
ToastDescription.displayName = ToastPrimitives.Description.displayName

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
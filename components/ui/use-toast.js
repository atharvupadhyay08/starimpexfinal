"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id?.ReactNode
  description?.ReactNode
  action?}

const actionTypes = {
  ADD_TOAST"ADD_TOAST",
  UPDATE_TOAST"UPDATE_TOAST",
  DISMISS_TOAST"DISMISS_TOAST",
  REMOVE_TOAST"REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type"ADD_TOAST"]
      toast}
  | {
      type"UPDATE_TOAST"]
      toast}
  | {
      type"DISMISS_TOAST"]
      toastId?"id"]
    }
  | {
      type"REMOVE_TOAST"]
      toastId?"id"]
    }



const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type"REMOVE_TOAST",
      toastId})
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state)=> {
  switch (action.type) {
    case "ADD_TOAST"{
        ...state,
        toasts.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST"{
        ...state,
        toasts.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } ),
      }

    case "DISMISS_TOAST"{
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open}
            ),
      }
    }
    case "REMOVE_TOAST"(action.toastId === undefined) {
        return {
          ...state,
          toasts}
      }
      return {
        ...state,
        toasts.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners(state) => void> = []

let memoryState= { toasts}

function dispatch(action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }) {
  const id = genId()

  const update = (props) =>
    dispatch({
      type"UPDATE_TOAST",
      toast{ ...props, id },
    })
  const dismiss = () => dispatch({ type"DISMISS_TOAST", toastId})

  dispatch({
    type"ADD_TOAST",
    toast{
      ...props,
      id,
      open(open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id}
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss(toastId?) => dispatch({ type"DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }

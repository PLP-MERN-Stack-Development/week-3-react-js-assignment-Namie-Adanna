import React from "react"
import { cn } from "@/lib/utils"

const variantClasses = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  danger: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
}

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  const base = "rounded-md font-medium transition duration-200 disabled:opacity-50 disabled:pointer-events-none"

  return (
    <button
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}

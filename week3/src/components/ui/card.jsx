import React from "react"
import { cn } from "@/lib/utils"

export default function Card({ title, description, footer, children, className }) {
  return (
    <div className={cn("bg-white rounded-lg shadow-sm border p-6", className)}>
      {(title || description) && (
        <div className="mb-4">
          {title && <h2 className="text-lg font-semibold mb-1">{title}</h2>}
          {description && <p className="text-gray-600 text-sm">{description}</p>}
        </div>
      )}

      <div className="mb-4">
        {children}
      </div>

      {footer && (
        <div className="pt-4 border-t mt-4 text-sm text-gray-500">
          {footer}
        </div>
      )}
    </div>
  )
}


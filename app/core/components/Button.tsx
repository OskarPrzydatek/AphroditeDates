import { theme } from "app/style/theme"
import React from "react"

type ButtonProps = {
  onClick?: () => any
  type?: any
  label: string
  disabled?: any
}

export default function Button({ onClick, label, disabled, type }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {label}

      <style jsx>{`
        button {
          background-color: inherit;
          border: none;
          padding: 0;
          font-family: inherit;
          font-size: ${theme.fontSize.l};
          text-decoration: underline;
          text-decoration-color: ${theme.color.red};
          cursor: pointer;
        }

        @media screen and (min-width: ${theme.breakpoints.s}) {
          button {
            margin-right: 1rem;
          }

          button:last-child {
            margin-right: 0;
          }
        }
      `}</style>
    </button>
  )
}

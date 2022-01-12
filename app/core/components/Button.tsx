import { theme } from "app/style/theme"
import React from "react"

export default function Button({ onClick, label }) {
  return (
    <button onClick={onClick}>
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

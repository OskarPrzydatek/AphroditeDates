import { theme } from "app/style/theme"
import React from "react"

export default function Loading() {
  return (
    <article className="loading">
      <h2>Loading</h2>

      <style jsx>{`
        .loading {
          background: ${theme.color.white};
          color: ${theme.color.black};
          height: 100vh;
          marhin: 0;
          padding: 0;
        }

        .loading h2 {
          text-align: center;
        }
      `}</style>
    </article>
  )
}

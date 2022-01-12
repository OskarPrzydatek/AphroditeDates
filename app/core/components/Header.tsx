import { theme } from "app/style/theme"
import { Link, Routes } from "blitz"
import React from "react"

export default function Header() {
  return (
    <header className="page-logo">
      <Link href={Routes.Home()}>
        <a>
          <h1>Afrodyta</h1>
        </a>
      </Link>

      <style jsx>{`
        .page-logo {
          font-size: ${theme.fontSize.l};
          text-align: center;
          width: 100%;
        }

        a {
          width: 100%;
        }

        @media screen and (min-width: ${theme.breakpoints.xs}) {
          .page-logo {
            font-size: ${theme.fontSize.xl};
            text-align: center;
          }
        }

        @media screen and (min-width: ${theme.breakpoints.l}) {
          .page-logo {
            font-size: ${theme.fontSize.xxl};
          }
        }

        .page-logo h1 {
          margin: 0;
        }
      `}</style>
    </header>
  )
}

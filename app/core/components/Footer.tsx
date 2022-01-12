import { theme } from "app/style/theme"
import { Link, Routes } from "blitz"
import React from "react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <header>
        <h2>Afrodyta</h2>
        <p>Portal Randkowy</p>
        <p>Copyright &copy; {year}</p>
      </header>

      <Link href={Routes.TermsPage()}>
        <a>Regulamin</a>
      </Link>

      <style jsx>{`
        .footer {
          height: 30vh;
          padding: 3%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer header > * {
          text-align: center;
        }

        .footer h2 {
          font-size: ${theme.fontSize.xl};
        }

        .footer a {
          font-size: ${theme.fontSize.l};
          color: ${theme.color.red};
        }

        @media screen and (min-width: ${theme.breakpoints.m}) {
          .footer {
            height: 40vh;
            flex-direction: row;
          }

          .footer header {
            width: 60%;
          }

          .footer header > * {
            text-align: left;
          }

          .footer a {
            width: 40%;
            text-align: center;
            font-size: ${theme.fontSize.xl};
          }
        }
      `}</style>
    </footer>
  )
}

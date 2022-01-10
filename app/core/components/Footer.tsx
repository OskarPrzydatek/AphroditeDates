import { Link, Routes } from "blitz"
import React from "react"

export default function Footer() {
  return (
    <footer>
      <h3>Afrodyta</h3>

      <Link href={Routes.TermsPage()}>
        <a>Regulamin</a>
      </Link>
    </footer>
  )
}

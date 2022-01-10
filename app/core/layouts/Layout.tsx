import { Head, BlitzLayout, Link, Routes } from "blitz"
import { Suspense } from "react"
import Footer from "../components/Footer"

const Layout: BlitzLayout<{}> = ({ children }) => {
  return (
    <Suspense fallback="...">
      <Head>
        <title>Afrodyta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href={Routes.Home()}>
        <a>
          <h1>Afrodyta</h1>
        </a>
      </Link>

      {children}
      <Footer />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Arial Narrow", Arial, sans-serif;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          box-sizing: border-box;
        }
      `}</style>
    </Suspense>
  )
}

export default Layout

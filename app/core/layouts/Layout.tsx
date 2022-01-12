import { theme } from "app/style/theme"
import { Head, BlitzLayout } from "blitz"
import { Suspense } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Loading from "../components/Loading"

const Layout: BlitzLayout<{}> = ({ children }) => {
  return (
    <Suspense fallback={<Loading />}>
      <Head>
        <title>Afrodyta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="page-wrapper">{children}</main>
      <Footer />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Forum&family=Playfair+Display+SC&display=swap");

        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ${theme.fontFamily};
          background-color: ${theme.color.white};
          color: ${theme.color.black};
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          box-sizing: border-box;
        }

        *:focus {
          outline: none;
        }

        *:focus-visible {
          outline: none;
        }

        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .page-wrapper {
          padding: 2%;
          min-height: 65vh;
        }

        @media screen and (min-width: ${theme.breakpoints.xs}) {
          .page-wrapper {
            min-height: 85vh;
          }
        }
      `}</style>
    </Suspense>
  )
}

export default Layout

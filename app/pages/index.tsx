import { BlitzPage, Image, Routes, useMutation } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import Layout from "app/core/layouts/Layout"
import Aphrodite from "../../public/aphrodite.webp"
import RegLogNav from "app/core/components/RegLogNav"
import React from "react"
import { theme } from "app/style/theme"

const Home: BlitzPage = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  return (
    <section className="home-content">
      <picture className="aphrodite">
        <Image className="aphrodite-img" src={Aphrodite} alt="Aphrodite" width="700" height="700" />
      </picture>
      <article className="reg-log-panel">
        <h2>Afrodyta - Portal Randkowy</h2>
        <RegLogNav currentUser={currentUser} logoutMutation={logoutMutation} />
      </article>

      <style jsx>{`
        .home-content {
          display: flex;
          flex-direction: column-reverse;
        }

        .home-content > * {
          width: 100%;
        }

        .aphrodite {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .reg-log-panel {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 10%;
        }

        .reg-log-panel > h2 {
          text-align: center;
          font-size: ${theme.fontSize.l};
        }

        @media screen and (min-width: ${theme.breakpoints.xl}) {
          .home-content {
            flex-direction: row;
          }

          .home-content > * {
            width: 50%;
          }

          .reg-log-panel {
            margin-top: 10%;
          }
        }

        @media screen and (min-width: ${theme.breakpoints.xs}) {
          .reg-log-panel > h2 {
            font-size: ${theme.fontSize.xl};
          }
        }
      `}</style>
    </section>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home

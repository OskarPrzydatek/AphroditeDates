import { theme } from "app/style/theme"
import { Link, Routes, useRouter } from "blitz"
import React from "react"
import Button from "./Button"

type UserPageProps = {
  currentUser: any
  logoutMutation?: any
  isUserPage?: boolean
  isAnnouncementsPage?: boolean
}

export default function RegLogNav({
  currentUser,
  logoutMutation,
  isUserPage,
  isAnnouncementsPage,
}: UserPageProps) {
  const router = useRouter()

  return (
    <nav className="nav-bar">
      {currentUser ? (
        <div className="logged-user-nav">
          <Button
            label={isAnnouncementsPage ? `Filtruj` : `Ogłoszenia`}
            onClick={async () => {
              await router.push(Routes.AnnouncementsPage())
            }}
          />
          {!isUserPage && (
            <Button label="Profil" onClick={async () => await router.push(Routes.UserPage())} />
          )}
          <Button
            label="Wyloguj"
            onClick={async () => {
              await logoutMutation()
              await router.push(Routes.Home())
            }}
          />
        </div>
      ) : (
        <div className="reg-log">
          <Link href={Routes.SignupPage()}>
            <a className="button small">
              <strong>Zarejestruj Się</strong>
            </a>
          </Link>
          <Link href={Routes.LoginPage()}>
            <a className="button small">
              <strong>Zaloguj</strong>
            </a>
          </Link>
        </div>
      )}

      <style jsx>{`
        .nav-bar {
          width: 100%;
        }

        .reg-log {
          width: 100%;
          display: flex;
          justify-content: space-around;
        }

        .reg-log > a {
          text-align: center;
        }

        .logged-user-nav {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }

        .logged-user-nav > * {
          margin: 1rem;
        }

        @media screen and (min-width: ${theme.breakpoints.s}) {
          .nav-bar {
            font-size: ${theme.fontSize.l};
          }

          .logged-user-nav {
            flex-direction: row;
          }
        }
      `}</style>
    </nav>
  )
}

import { Link, Routes, useRouter } from "blitz"
import React from "react"

type UserPageProps = {
  currentUser: any
  logoutMutation: any
  isUserPage?: boolean
}

export default function RegLogNav({ currentUser, logoutMutation, isUserPage }: UserPageProps) {
  const router = useRouter()

  return (
    <nav>
      {currentUser ? (
        <div>
          <button
            onClick={async () => {
              await logoutMutation()
              await router.push(Routes.Home())
            }}
          >
            Wyloguj
          </button>
          {!isUserPage && (
            <button onClick={async () => await router.push(Routes.UserPage())}>Profil</button>
          )}
        </div>
      ) : (
        <>
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
        </>
      )}
    </nav>
  )
}

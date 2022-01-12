import logout from "app/auth/mutations/logout"
import RegLogNav from "app/core/components/RegLogNav"
import TermsPoint from "app/core/components/TermsPoint"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Layout from "app/core/layouts/Layout"
import { theme } from "app/style/theme"
import { BlitzPage, useMutation } from "blitz"

const TermsPage: BlitzPage = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  return (
    <div>
      <RegLogNav currentUser={currentUser} logoutMutation={logoutMutation} toLeft={true} />
      <section>
        <h2>Regulamin</h2>
        <TermsPoint
          header={"Co to jest Afrodyta?"}
          paragraph={`Afrodyta to strona z szybkimi randkami przeznaczona dla ludzi o ograniczonym
          polu czasowym takich co więcej czasu poświęcają na pracę niż na miłość. Logujemy się,
          filtrujemy ogłoszenia, dzwonimy, spotykamy się! To jest idea Afrodyty.`}
        />
        <TermsPoint
          header={"Odpowiedzialność"}
          paragraph={`Afrodyta nie odpowiada za treści zawarte w ogłoszeniach. Jeśli jednak
          ogłoszenia będą zawierały treści pornograficzne lub będą zawierały treści rasistowskie,
          treści ujmujące godności ludzkiej etc. będą one natychmiastowo usuwane. Będziemy wdzięczni
          za zgłaszanie takich treści. W razie znalezienia takich treści prosimy
          o kontakt: aphrodite@aphrodite.com`}
        />
      </section>
      <style jsx>{`
        h2 {
          text-align: center;
          font-size: ${theme.fontSize.xl};
        }
      `}</style>
    </div>
  )
}

TermsPage.getLayout = (page) => <Layout>{page}</Layout>

export default TermsPage

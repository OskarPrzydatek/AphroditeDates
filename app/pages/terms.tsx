import logout from "app/auth/mutations/logout"
import RegLogNav from "app/core/components/RegLogNav"
import TermsPoint from "app/core/components/TermsPoint"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, useMutation } from "blitz"

const TermsPage: BlitzPage = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  return (
    <div>
      <RegLogNav currentUser={currentUser} logoutMutation={logoutMutation} />
      <section>
        <h2>Regulamin</h2>
        <TermsPoint
          header={"Co to jest Afrodyta?"}
          paragraph={"Afrodyta to strona z szybkimi randkami"}
        />
      </section>
    </div>
  )
}

TermsPage.getLayout = (page) => <Layout>{page}</Layout>

export default TermsPage

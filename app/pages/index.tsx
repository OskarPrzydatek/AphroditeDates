import { BlitzPage, Image, useMutation } from "blitz"
import Layout from "app/core/layouts/Layout"
import Filters from "app/core/components/Filters"
import Aphrodite from "../../public/aphrodite.webp"
import RegLogNav from "app/core/components/RegLogNav"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"

const Home: BlitzPage = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  return (
    <div className="home-page">
      <RegLogNav currentUser={currentUser} logoutMutation={logoutMutation} />
      <div className="home-wrapper">
        <picture>
          <Image src={Aphrodite} alt="aphrodite" width="400px" height="400px" />
        </picture>
        <Filters />
      </div>
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout>{page}</Layout>

export default Home

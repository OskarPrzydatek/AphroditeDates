import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"

const AnnouncementsPage: BlitzPage = () => {
  return <div>Ogłoszenia</div>
}

AnnouncementsPage.getLayout = (page) => <Layout>{page}</Layout>

export default AnnouncementsPage

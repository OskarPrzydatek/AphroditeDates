import Layout from "app/core/layouts/Layout"
import { BlitzPage, useParams } from "blitz"

const AnnouncementPage: BlitzPage = () => {
  const params = useParams()

  return <div>ogloszenie {params.id}</div>
}

AnnouncementPage.getLayout = (page) => <Layout>{page}</Layout>

export default AnnouncementPage

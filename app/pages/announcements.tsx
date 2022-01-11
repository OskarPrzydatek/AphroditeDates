import useFiltredAnnouncements from "app/core/hooks/useFiltredAnnouncements"
import Layout from "app/core/layouts/Layout"
import { BlitzPage, useRouter } from "blitz"
import React from "react"

const AnnouncementsPage: BlitzPage = () => {
  const router = useRouter()

  const filtredAnnouncements = useFiltredAnnouncements(router.query)

  React.useEffect(() => {
    console.log(filtredAnnouncements)
  }, [filtredAnnouncements])

  return (
    <article>
      <h2>Ogłoszenia: {filtredAnnouncements.length}</h2>
      <ul>
        {filtredAnnouncements &&
          filtredAnnouncements.map(({ id, name, age, town }) => (
            <li key={id}>
              <button onClick={async () => await router.push(`/announcement/${id}`)}>
                <div>
                  <p>{name}</p>
                  <p>{age}</p>
                </div>
                <p>{town}</p>
              </button>
            </li>
          ))}
      </ul>
    </article>
  )
}

AnnouncementsPage.getLayout = (page) => <Layout>{page}</Layout>

export default AnnouncementsPage
